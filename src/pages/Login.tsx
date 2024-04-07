import {NavigationBar} from "../components/NavigationBar.tsx";
import {OAuthLogin} from "../components/OAuthLogin.tsx";
import '../styles/login.css'

export function Login() {
    return (
        <>
            <NavigationBar />
            <OAuthLogin />

            <div className="goals">
                <div className="text">
                    <h2 className="text-center">Our Goals</h2>
                    Hello
                </div>


            </div>
            <div className="team">
                <div className="text">
                    <h2 className="text-center">Who are we?</h2>
                    Hello
                </div>
            </div>
        </>
    );
}
