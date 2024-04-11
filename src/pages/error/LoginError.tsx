import {useNavigate} from "react-router-dom";

export function LoginError() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/`;
        navigate(path);
    }

    return (
        <>
            <h1>You are not logged in!</h1>
            <h2>Please head to the login screen.</h2>
            <button onClick={routeChange}> Login </button>
        </>
    )
}