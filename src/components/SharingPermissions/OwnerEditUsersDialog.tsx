import  {useState} from "react";
import {Button, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {backend_url} from "../../config/constant.ts";
import axios from "axios";

interface IndividualData {
    name: string;
    userId: string;
    userPermission: string;
}

interface UserPermissionData {
    OWNER: IndividualData[];
    EDITOR: IndividualData[];
    VIEWER: IndividualData[];
}


export function OwnerEditUsersDialog({ treeId }: { treeId: string }) {

    const [open, setOpen] = useState<boolean>(false);

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
            for (const permission in data) {
                data[permission].forEach((user: IndividualData) => {
                    setAllUsers(prevUsers => [...prevUsers, user]);
                })
            }
        });
        console.log(allUsers)
    }


    function handleClose() {
        setOpen(false);
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
                            <TableRow>
                                <TableCell>Lalal</TableCell>
                                <Select style={{
                                    width: "10rem"
                                }}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"EDITOR"}>Editor</MenuItem>
                                    <MenuItem value={"VIEWER"}>Viewer</MenuItem>
                                </Select>
                                <TableCell>Lalal</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Lalal</TableCell>
                                <TableCell>Lalal</TableCell>
                                <TableCell>Lalal</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Lalal</TableCell>
                                <TableCell>Lalal</TableCell>
                                <TableCell>Lalal</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </DialogContent>
            </Dialog>
        </>
    )
}