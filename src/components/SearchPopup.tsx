import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {Typography} from "@mui/material";
import "../styles/search.css"
import SearchIcon from '../assets/search-alt-2-svgrepo-com.svg'
import {useState} from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export function SearchPopup() {
    const [open, setOpen] = React.useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="search-format">
                <input className="search-input"
                       type="search"
                       placeholder="Search For Tree"
                       aria-label="Enter Tree Name..."
                       onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="search-button" onClick={handleClickOpen}>
                    <img className="search-icon" src={SearchIcon} alt="Search"  onClick={handleClickOpen} />
                </button>

            </div>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                maxWidth='lg'
                fullWidth
            >
                <DialogTitle className="search-title">
                    Search results for: {searchInput}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        1
                    </Typography>
                    <Typography gutterBottom>
                        2
                    </Typography>
                    <Typography gutterBottom>
                        3
                    </Typography>
                    <Typography gutterBottom>
                        4
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
