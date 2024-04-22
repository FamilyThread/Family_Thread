
import React from 'react';
import "../styles/popupButtons.css";
import "../styles/accountSettings.css";

export function MyAccountSettings() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="btnOnPageSetting" onClick={handleClickOpen}>Account Settings</button> {/* open */}

            <dialog className="settingsContainer" open={open} onClose={handleClose}>
                {/* header */}
                <div className="containerHeader">Account Settings
                    <button className="closeWindowBtnSettings" onClick={handleClose}>X</button>
                </div>

                <div className="containerTextSettings">Delete Account
                </div>


                {/* end container */}
            </dialog>

            <button className="btnOnPageSetting" onClick={handleClose}></button>
            {/* close */}

        </>
    );

}
