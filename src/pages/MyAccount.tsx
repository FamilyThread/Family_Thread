import {NavigationBar} from "../components/NavigationBar.tsx";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import temppfp from '../assets/placeholderpfp.png';
import "../styles/myaccount.css";


export function MyAccount() {

        const navigate = useNavigate();


        useEffect(() => {
            checkUserLogInStatus().then(isLoggedIn => {
                if (!isLoggedIn) {
                    navigate("/error")
                }
            })

        }, []);

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
                        <a href="/MyAccountEditProfile">Edit Profile</a> {/* popup */}
                    </div>
                    <div className="optionstxt">
                        <a href="/myaccountsettings">Account Settings</a> {/* popup */}
                    </div>
                    <div className="optionstxt">
                        <a href="/mytreesviewtrees">View My Trees</a> {/* page */}
                    </div>
                </div>
            </div>

        </>
    );
}
