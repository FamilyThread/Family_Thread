import {NavigationBar} from "../components/NavigationBar.tsx";
import temppfp from '../assets/placeholderpfp.png';
import "../styles/myaccount.css";
import {MyAccountEditProfile} from "../components/MyAccountEditProfile.tsx";
import {MyAccountSettings} from "../components/MyAccountSettings.tsx";

/*
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
 */

export function MyAccount() {

    /*
        const navigate = useNavigate();


        useEffect(() => {
            checkUserLogInStatus().then(isLoggedIn => {
                if (!isLoggedIn) {
                    navigate("/error")
                }
            })

        }, []);
*/
    return (

        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>

            <NavigationBar/>
            <h1 className="accheader">MyAccount</h1>

            <div className="accContainer">
                <div className="userinfo">
                    <div><img src={temppfp} alt="temppfp" className="portrait"/></div>
                </div>
                <div className="adjust">
                    <div className="infoboxes">
                        <div className="infoboxestxt">Name</div>
                        [User's Name]
                    </div>
                    <div className="infoboxes">
                        <div className="infoboxestxt">Username</div>
                        [User's Username]
                    </div>
                    <div className="infoboxes">
                        <div className="infoboxestxt">Email</div>
                        [User's Email]
                    </div>
                </div>
                <div className="options">
                    <div className="header-options">Options</div>
                    <div className="optionstxt">
                        <MyAccountEditProfile/>{/* popup */}
                    </div>
                    <div className="optionstxt">
                        <MyAccountSettings/> {/* popup */}
                    </div>
                </div>
            </div>

        </>
    );
}
