
import React from 'react';
import "../styles/popupButtons.css";
import "../styles/uploadPFP.css";
import temppfp from "../assets/placeholderpfp.png";


export function UploadPFP() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>

            <button className="btnOnPage" onClick={handleClickOpen}>Edit Profile Image</button>

            <dialog className="uploadPFPContainer" open={open} onClose={handleClose}>
                <div className="PFPHeader">Edit Profile Image
                    <button className="closeWindowBtnPFP" onClick={handleClose}>X</button>
                </div>
                <div className="adjustPFP"><img src={temppfp} alt="temppfp" className="portrait"/></div>
                <div className="containerTextPFP">Upload New Image</div>
                <div className="containerTextPFP">Remove Current Image</div>
                <div className="btnsPFP">
                    <button className="saveBtnUploadPFP">Save</button> {/* make box close after */}
                    <button className="cancelBtnUploadPFP" onClick={handleClose} >Close</button>
                </div>
            </dialog>

        </>
    );

}