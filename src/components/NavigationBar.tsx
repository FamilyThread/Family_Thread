import "../styles/nav.css";
import logo from "../assets/logo.png"
import {backend_url} from "../assets/constant.ts";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";
import {useEffect, useState} from "react";

export function NavigationBar() {
    const [loggedIn, setLoggedIn] = useState(false);

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
                    <input className="search" type="search" placeholder="Search For Tree"
                           aria-label="Search for trees..."/>
                    {/*<img src={search} alt=""> </img>*/}
                    <button className="search-btn" type="submit">
                        Search
                    </button>
                </div>
                {loggedIn?
                    <a href={backend_url + "/logout"}>Logout</a>: null}
            </nav>
        </>
    )
        ;
}
