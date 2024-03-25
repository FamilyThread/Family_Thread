import {NavigationBar} from "../components/NavigationBar.tsx";
import {OAuthLogin} from "../components/OAuthLogin.tsx";


export function Login() {
    return (
        <>
            <NavigationBar />
            <OAuthLogin />
        </>
    );
}
