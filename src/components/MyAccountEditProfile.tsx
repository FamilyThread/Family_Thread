
import React from 'react';
import "../styles/popupButtons.css";
import "../styles/accountEditProfile.css";

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
            <button className="btnOnPage" onClick={handleClickOpen}>settingstest1</button>

            <dialog className="editContainer" open={open} onClose={handleClose}>

            </dialog>


            <button className="btnOnPage" onClick={handleClose}>settingstest2</button>

        </>
    );

}
