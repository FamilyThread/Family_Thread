import ReactCardFlip from "react-card-flip";
import "../../styles/flipcards.css"
import {useState} from "react";
import githubLogo from "../../assets/cardIcons/github-142-svgrepo-com.svg";
import linkedInLogo from "../../assets/cardIcons/linked-in-logo-of-two-letters-svgrepo-com.svg";
import image from "../../assets/cardImages/luisImage.jpg"

export function LuisCard(){

    const [isFlipped, setIsFlipped] = useState(false)

    function flipCard(){
        setIsFlipped(!isFlipped);
    }


    return(

        <ReactCardFlip flipDirection={"horizontal"} isFlipped={isFlipped}>
            <div style={{paddingTop: 10, paddingBottom: 10}}>

                {/*FRONT OF THE CARD*/}
                <div className={"card-front"}>
                    <div className={"image-container"}>
                        <div className="image">
                            <img src={image} alt="Soney's picture" className="img" ></img>
                        </div>
                    </div>
                    <h1 className={"memberName"}>
                        Luis Medina
                    </h1>
                    <h2 className={"email"}>
                        lmedina@oswego.edu
                    </h2>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <button className={"button"} onClick={flipCard}>LEARN MORE</button>
                    </div>

                </div>

            </div>

            <div style={{paddingTop: 10, paddingBottom: 10}}>
                {/*BACK OF THE CARD*/}
                <div className={"card-back"} onClick={flipCard}>
                    <h1 className={"summary-title"}>
                        Summary
                    </h1>
                    <h3 className={"summary-text"} style={{textAlign: "start"}}>
                        <h3 className={"summary-text"} style={{textAlign: "end"}}>Software Engineer BS</h3>

                        <h3 className={"summary-text"} style={{textAlign: "end"}}>Applied Mathematics minor</h3>

                        <h3 className={"summary-text"} style={{textAlign: "end"}}>Logic minor</h3>
                        <div className={"socialLogosContainer"} style={{marginTop:10}}>
                            <img src={githubLogo} alt={"GitHub Logo"} className={"github-logos"}></img>
                            <h1 className={"socialName"}>LuisMed674</h1>
                        </div>
                        <div className={"socialLogosContainer"}>
                            <img src={linkedInLogo} alt={"LinkedIn Logo"} className={"linkedin-logos"}></img>
                            <h1 className={"socialName"} style={{marginTop: 24}}>Luis Medina</h1>
                        </div>
                    </h3>
                </div>
            </div>

        </ReactCardFlip>


    );
}