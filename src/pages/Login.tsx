import {NavigationBar} from "../components/NavigationBar.tsx";
import {OAuthLogin} from "../components/OAuthLogin.tsx";
import '../styles/login.css'
// import {Separator} from "../components/separator.tsx";

export function Login() {
    return (
        <>

            <NavigationBar />
            <OAuthLogin />

            <div className="goals">
                <div className="text">
                    <h2 className="text-center">Our Mission Statement</h2>
                    <blockquote>
                        <p>
                        The Family Thread is a system software that family members can use to create a family tree. Unlike
                        other family tree products, ours allows users to add custom portraits, and work with other
                        collaborators to create a more accurate representation while being user-friendly and visually appealing.
                        </p>
                    </blockquote>
                </div>


            </div>
            <div className="team">
                <div className="text">
                    <h2 className="text-center">Contact Us</h2>

                    <div className="form">

                    </div>
                </div>
            </div>
        </>
    );
}
