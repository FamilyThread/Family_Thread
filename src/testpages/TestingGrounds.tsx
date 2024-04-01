import {EditPersonPopup} from "../components/EditPersonPopup.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";
export function TestingGrounds() {
    return (
        <>
            <NavigationBar />
            <EditPersonPopup />

            <a href='/myaccounttest'> My Account Backend Test</a>
        </>

    );
}
