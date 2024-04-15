

// TODO: Note: I did suppress to ignore an error for jwtDecode. Look into it later.

import {backend_url} from "../config/constant.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";
import "../styles/login.css";

export function OAuthLogin() {
    const [logInStatus, setLogInStatus] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const isLoggedIn = await checkUserLogInStatus();
                setLogInStatus(isLoggedIn);
                if (logInStatus) {
                    navigate("/viewtrees")
                }
            } catch (error) {
                console.error("Error checking login status:", error);
            }
        };
        checkLoginStatus();
    })



    return (
        <>
            {logInStatus ?
                <p>Already logged in</p>
                :
                <>
                    {/*<div className="login-container">*/}
                    {/*    <h2>Family Thread</h2>*/}
                    {/*    <h3>Login/Register</h3>*/}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10, paddingRight:10 }}>
                        <button className={"login-btn"}>
                            <a className={"login-link"} href={backend_url + "/oauth2/authorization/google"}>Login with Google</a>
                        </button>
                    </div>
                    {/*</div>*/}
                </>
            }
        </>
    );
}
