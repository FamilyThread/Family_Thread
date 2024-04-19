import {useEffect, useState} from "react";
import {
    Button,
    DialogContentText,
    IconButton,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {backend_url} from "../../config/constant.ts";
import axios from "axios";
import DialogActions from "@mui/material/DialogActions";

interface IndividualData {
    name: string;
    userId: string;
    userPermission: string;
    userEmail: string;
}

interface UserPermissionData {
    OWNER: IndividualData[];
    EDITOR: IndividualData[];
    VIEWER: IndividualData[];
}


export function OwnerEditUsersDialog({ treeId }: { treeId: string }) {

    const [open, setOpen] = useState<boolean>(false);
    const [confirmDialog, setConfirmDialog] = useState<boolean>(false);

    const [allUsers, setAllUsers] = useState<IndividualData[]>([]);





    const getTreeAssociatedUsers = async () => {
        const response = await axios.get(
            backend_url + "/share/" + treeId + "/getUsers",
            {withCredentials:true}
        )
        return response.data;
    }

    function handleClickOpen() {
        setOpen(true);
        getTreeAssociatedUsers().then((data: UserPermissionData) => {
            for (const [key, value] of Object.entries(data)) {
                setAllUsers(prevState => prevState.concat(value));
            }
        })
    }



    function handleClose() {
        setOpen(false);
        setAllUsers([]);
    }

    function handleEventChange(userId:string, value:string) {
        const indexToChange = allUsers.findIndex(element => element.userId === userId);
        const changedValue = allUsers.find(element => element.userId === userId);


        if (indexToChange !== -1) {
            const usersUpdate = [... allUsers];
            usersUpdate[indexToChange] = {
                ...usersUpdate[indexToChange],
                userPermission: value
            }
            updateUserPermission(usersUpdate[indexToChange]);
            setAllUsers(usersUpdate);
        }
    }

    const updateUserPermission = async (changedValue: IndividualData) => {
        const response = await axios.post(
            backend_url + "/share/" + treeId + "/update-user",
            changedValue,
            {withCredentials:true}
        )
        console.log(response);
        return response.data;
    }

    useEffect(() => {
        console.log("Updated allUsers:", allUsers); // This logs whenever allUsers changes
    }, [allUsers]);

    function openConfirmDialog() {
        setConfirmDialog(true);
    }
    
    function closeConfirmDialog() {
        setConfirmDialog(false);
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit Users
            </Button>
            <Dialog
                open={open}
                    >
                <DialogTitle id="alert-dialog-title">
                    Edit Users
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableCell>Email</TableCell>
                            <TableCell>Permission</TableCell>
                            <TableCell>Remove</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                allUsers.filter((data: IndividualData) => data.userPermission !== "OWNER")
                                    .map((data: IndividualData, key) =>
                                    {
                                        return  (
                                            <TableRow key={key}>
                                                <TableCell>{data.userEmail}</TableCell>
                                                <Select style={{
                                                    width: "10rem"
                                                }}
                                                        value={data.userPermission}
                                                        onChange = {e => handleEventChange(data.userId, e.target.value)}
                                                >
                                                    <MenuItem value={"EDITOR"}>Editor</MenuItem>
                                                    <MenuItem value={"VIEWER"}>Viewer</MenuItem>
                                                </Select>
                                                <TableCell>
                                                    <IconButton onClick={openConfirmDialog}>
                                                        <CloseIcon/>
                                                        {/*<Dialog*/}
                                                        {/*    open={confirmDialog}*/}
                                                        {/*    aria-labelledby="alert-dialog-title"*/}
                                                        {/*    aria-describedby="alert-dialog-description"*/}
                                                        {/*>*/}
                                                        {/*    <DialogTitle id="alert-dialog-title">*/}
                                                        {/*        {"Use Google's location service?"}*/}
                                                        {/*    </DialogTitle>*/}
                                                        {/*    <DialogContent>*/}
                                                        {/*        <DialogContentText id="alert-dialog-description">*/}
                                                        {/*            Let Google help apps determine location. This means sending anonymous*/}
                                                        {/*            location data to Google, even when no apps are running.*/}
                                                        {/*        </DialogContentText>*/}
                                                        {/*    </DialogContent>*/}
                                                        {/*    <DialogActions>*/}
                                                        {/*        <Button onClick={() => setConfirmDialog(false)}>Disagree</Button>*/}
                                                        {/*        <Button onClick={closeConfirmDialog} autoFocus>*/}
                                                        {/*            Agree*/}
                                                        {/*        </Button>*/}
                                                        {/*    </DialogActions>*/}
                                                        {/*</Dialog>*/}
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                )})

                            }
                        </TableBody>
                    </Table>
                </DialogContent>
            </Dialog>
        </>
    )
}