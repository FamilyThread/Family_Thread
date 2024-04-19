
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
            <button className="btnOnPageSetting" onClick={handleClickOpen}>Open</button> {/* open */}

            <dialog className="settingsContainer" open={open} onClose={handleClose}>

            </dialog>

            <button className="btnOnPageSetting" onClick={handleClose}>Close</button> {/* close */}

        </>
    );

}
