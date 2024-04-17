import ReactCardFlip from "react-card-flip";
import "../../styles/flipcards.css"
import {useState} from "react";
import image from "../../assets/cardImages/soneyImage.jpg"

export function SoneyCard(){

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
                        Phone Pyae Sone Phyo (Soney)
                    </h1>
                    <h2 className={"email"}>
                        pphyo@oswego.edu
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
                    <h3 className={"summary-text"}>
                        Computer Science as a passion.

                        Computer Science major at SUNY Oswego

                    </h3>
                </div>
            </div>

        </ReactCardFlip>


);
}