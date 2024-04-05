import {EditPersonPopup} from "../components/EditPersonPopup.tsx";
import {NavigationBar} from "../components/NavigationBar.tsx";
export function TestingGrounds() {
    return (
        <>
            <NavigationBar />
            <EditPersonPopup />

            <br/>
            <a href='/myaccounttest'> My Account Backend Test</a><br/>
            <a href='/treefunctiontest'>Tree Function Test</a> <br/>
            <a href='/available-trees'>Available Trees</a>
        </>

    );
}
