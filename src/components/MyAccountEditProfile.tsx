
import React from 'react';
import "../styles/popupButtons.css";
import "../styles/accountEditProfile.css";
import {UploadPFP} from "./UploadPFP.tsx";

export function MyAccountEditProfile() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="btnOnPage" onClick={handleClickOpen}>Edit Profile</button>

            <dialog className="editContainer" open={open} onClose={handleClose}>

                {/* header */}

                <div className="closeWindowBtnCont">

                    <div className="containerHeader">Edit Profile
                        <button className="closeWindowBtnEdit" onClick={handleClose}>X</button>
                    </div>
                    {/* account details */}
                    <div className="containerText">Username:
                        <div className="boxDetails"></div></div>
                    <div className="containerText">Account ID:
                        <div className="boxDetails"></div></div>
                    {/* DB ID - necessary? */}
                    <div className="containerText">Account Email:
                        <div className="boxDetailsShort"></div></div>
                    {/* Google oAuth/Gmail */}
                    <div className="containerText">DOB:
                        <div className="boxDetailsDOB"></div></div>
                    {/* necessary? */}
                    <div className="containerTextPFP">
                        <UploadPFP/>
                    </div>
                </div>
                {/* end header & acc info */}

                {/* account settings
                <div className="containerCenter">Account Settings</div>
                <div className="containerText">
                    <a href="/mytreesviewtrees">Delete Account</a>
                </div>
                */}


            </dialog>


        </>
    );

}
