import {Button, FormGroup, IconButton, styled} from "@mui/material";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {Form} from "react-bootstrap";
import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {backend_url} from "../config/constant.ts";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";
import {useLocation, useNavigate} from "react-router-dom";


export function SharePopUpBox() {

    const [popup, setPopup] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const location = useLocation();
    const treeId = location.pathname.split("displayTrees/")[1];

    const navigate = useNavigate();

    // Toggling share popup
    const togglePopUp = () => {
        setPopup(true);
    }

    // Styled Button
    const StyledButton = styled(Button)({
        border: "none",
        width: "auto",
        padding: "10px 30px",
        borderRadius: "15px",
        backgroundColor: "#073F3E",
        color: "white",
        transition: "500ms background-color ease, 500ms color ease",

        "&:hover": {
            backgroundColor: "white",
            color: "#073F3E",
            boxShadow: "inset 0 0 0 1px #073F3E"
        }
    });



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            email, role
        }
        const response = await axios.post(
            backend_url + "/share/" + treeId,
            data,
            { withCredentials: true })

        setEmail("");
        setRole("");

        console.log(response.data);

    }

    useEffect(() => {
        checkUserLogInStatus().then(isLoggedIn => {
            if (!isLoggedIn) {
                navigate("/")
                alert("Please Login First");
            }
        })

    }, []);

    return (
     <>
         <div className="shareButtonContainer">
             <StyledButton onClick={togglePopUp}>Share</StyledButton>
             {popup && (
                 <div className="share-popup">

                     <div style={{
                         width: "100%",
                         display: "flex",
                         justifyContent: "right"

                     }}>
                         <IconButton
                             onClick={() => setPopup(false)}
                             style={{
                                 color: "white"
                             }}
                         >
                             <CloseIcon
                             />
                         </IconButton>
                     </div>


                     <Form style={{
                         display: "flex",
                         flexDirection: "column",
                         gap: "1rem"
                     }} onSubmit={handleSubmit}>
                         <FormGroup>
                             <Form.Label>Email Address</Form.Label>
                             <Form.Control type="email"
                                           name="email"
                                           placeholder="enter email"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                           required/>
                         </FormGroup>

                         <Form.Group controlId="formBasicRole">
                             <Form.Label>Permission Role</Form.Label>
                             <Form.Select
                                 name="role"
                                 value={role}
                                 onChange={e => setRole(e.target.value)}

                                 required>
                                 <option value="">Select role</option>
                                 <option value="Editor">Editor</option>
                                 <option value="Viewer">Viewer</option>
                             </Form.Select>
                         </Form.Group>

                         <StyledButton
                             type="submit"
                             style = {{
                                 display: "flex",
                                 justifyContent: "center",
                                 margin: "0 5rem"
                             }}
                         >
                             Submit
                         </StyledButton>
                     </Form>
                 </div>
             )}
         </div>
     </>
    )
}