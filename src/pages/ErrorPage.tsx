import {NavigationBar} from "../components/NavigationBar";
import {LoginError} from '../components/Errors/LoginError.tsx'; // Import the error components
import {PermissionError} from '../components/Errors/PermissionError';
import "../styles/error.css"
import logo from "../assets/csc380logoL.png"
import {useLocation} from "react-router-dom";
import {Suspense} from "react";
export function ErrorPage() {
    const location = useLocation();
    const errorType = location.pathname.split("/")[1];


    function displayError() {
        switch (errorType) {
            case "error":
                return <LoginError/>;
            case "403":
                return <PermissionError/>;
            case "404":
                return <div>Page Not Found</div>;
            default:
                return <div>Unknown Error</div>;
        }
    }

    return (
        <>
            <NavigationBar/>
            <style>
                {document.body.style.backgroundColor = '#479761'};
            </style>
            <div className="error-body">
                <div className="left-error">
                    <h1 className="oops"> Oops! </h1>
                    You seem to have ran into an error.
                    <Suspense fallback={<div>Loading...</div>}>
                        {displayError()}
                    </Suspense>
                </div>
                <div className="right-error">
                    <img src={logo} alt="Family Thread Tree" />
                </div>
            </div>
        </>
    );
}
