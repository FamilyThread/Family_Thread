import '../styles/editPersonPopup.css';
import React from 'react';
import pfp from '../assets/pfp-placeholder.jpg';

export function EditPersonPopup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        // const openPopup = document.querySelector('.openButton')
      <>
          <button onClick={handleClickOpen}> Open </button>

          <dialog className="popupContainer" open={open} onClose={handleClose}>
              <h1>Edit Person</h1>

              <div className="info">
                  <div className="leftContainer">
                      <div className="optionalInfo">
                          <div ><img src={pfp} alt="pfp" className="portrait"/></div>
                          <div className="description">
                              <label>
                                  <textarea name="personInfo" placeholder="Enter user description" />
                              </label>
                          </div>
                      </div>
                  </div>
                  <div className="requiredInfo">
                      <div className="forms">
                          <label>
                              <input placeholder="NAME"/>
                          </label>
                          <label>
                              <input placeholder="DATE OF BIRTH"/>
                          </label>
                          <label>
                              <input placeholder="PLACE OF BIRTH"/>
                          </label>
                          <label>
                              <input placeholder="DATE OF DEATH"/>
                              <label className="death">
                                  Still alive
                                  <input type="checkbox"/>
                              </label>
                          </label>
                          <label>
                              <input placeholder="PARENT 1"/>
                          </label>
                          <label>
                          <input placeholder="PARENT 2"/>
                          </label>
                      </div>
                      <div className="buttons">
                          <button className="deleteBtn"> Delete </button>
                          <button className="cancelBtn"> Cancel </button>
                          <button className="saveBtn"> Save </button>
                      </div>
                  </div>
              </div>
          </dialog>

          <button onClick={handleClose}> Close</button>

      </>
    );

}
