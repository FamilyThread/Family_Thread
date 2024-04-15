// import {NavigationBar} from "../components/NavigationBar.tsx";
import {OAuthLogin} from "../components/logInButton.tsx";
import '../styles/login.css'
import image from "../assets/loginLogo.png";
// import {Separator} from "../components/separator.tsx";

export function Login() {
    return (
        <>
            <div className="top">
                <OAuthLogin/>
                <img src={image} alt="Family Thread logo"></img>
                <h1 className="name">Family Thread</h1>
            </div>
            {/*<NavigationBar/>*/}



            <div className="mission">
                <div className="text">
                    <h2 className="text-lg-start" style={{fontSize: 60, marginLeft:10}}>Our Mission</h2>
                    <blockquote>
                        <p>
                            The Family Thread is a system software that family members can use to create a family tree.
                            Unlike
                            other family tree products, ours allows users to add custom portraits, and work with other
                            collaborators to create a more accurate representation while being user-friendly and
                            visually appealing.
                        </p>
                    </blockquote>
                </div>
            </div>

            <div className="vision">
                <div className="text">
                    <h2 className="text-end" style={{fontSize: 60, marginRight:10}}>Our Vision</h2>

                    <blockquote>
                        <p className={"vision-blockquote"}>
                            For genealogists or adults who might be interested in their lineage or their family’s represented as a visualization. The Family Thread is an interactive family tree that allows family members to create a family tree, add custom portraits, and work with other collaborators to create a more accurate representation while being user-friendly and visually appealing. Unlike Family Echo, our product provides more creative flexibility and allows the family tree to be pleasing to the eye.

                        </p>
                    </blockquote>
                </div>
            </div>


            <div className="team">
                <div className="text">
                    <h2 className="text-start" style={{fontSize: 60, marginLeft:10}}>The Family Thread Team</h2>

                    <div className="form">
                        <h2 className={"comingSoon"}>COMIN SUN AND HOT</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
