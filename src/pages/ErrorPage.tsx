import React, { useState, Suspense } from 'react';
import { NavigationBar } from "../components/NavigationBar";
import { LoginError } from '../components/Errors/LoginError.tsx'; // Import the error components
import { PageNotFound } from '../components/Errors/PageNotFound.tsx';
import { PermissionError } from '../components/Errors/PermissionError';
import "../styles/error.css"

export function ErrorPage() {
    const [errorType] = useState(1);

    function displayError() {
        switch (errorType) {
            case 1:
                return <LoginError/>;
            case 2:
                return <PermissionError/>;
            case 3:
                return <PageNotFound/>; // Corrected NotFoundError to PageNotFound
            default:
                return <div>Unknown Error</div>;
        }
    }

    return (
        <>
            <NavigationBar/>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <div className="error-body">
                <h1>Oh, you've encountered an error!</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    {displayError()}
                </Suspense>
            </div>
        </>
    );
}
