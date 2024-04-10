import "../styles/nav.css";
import logo from "../assets/logo.png"
import {backend_url} from "../assets/constant.ts";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";
import {useEffect, useState} from "react";
import {SearchPopup} from "./SearchPopup.tsx";

export function NavigationBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    // const [openSearch, setSearchFunction] = useState(false);

    const checkLoginStatus = async () => {
        try {
            return await checkUserLogInStatus();
        } catch (error) {
            console.error("Error checking login status:", error);
        }
    };

    useEffect(() => {
        // @ts-ignore
        checkLoginStatus().then(r => setLoggedIn(r))
    }, []);



    return (
        <>
            <nav className="nav">
                <a className="logo" href="/viewtrees"> <img src={logo} alt="Family Thread Logo"></img> </a>
                <ul>
                    <li><a href="/myaccount">My Account</a></li>
                    <li><a href="/viewtrees">View Trees</a></li>
                    <li><a href="/createtrees">Create Trees</a></li>
                    <li><a href="/tests">Tests</a></li>
                </ul>
                <div className="search-container">
                    <SearchPopup />
                </div>
                {loggedIn ?
                    <a href={backend_url + "/logout"}>Logout</a> : <a href={backend_url + "/"}>Login</a>}
            </nav>
        </>
    )
        ;
}
