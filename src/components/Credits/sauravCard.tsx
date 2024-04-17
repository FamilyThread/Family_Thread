import ReactCardFlip from "react-card-flip";
import "../../styles/flipcards.css"
import {useState} from "react";

export function SauravCard(){

    const [isFlipped, setIsFlipped] = useState(false)

    function flipCard(){
        setIsFlipped(!isFlipped);
    }


    return(

        <ReactCardFlip flipDirection={"horizontal"} isFlipped={isFlipped}>
            <div style={{paddingTop: 10, paddingBottom: 10}}>

                {/*FRONT OF THE CARD*/}
                <div className={"card-front"}>
                    {/*<img src={crisImage} alt="picture"></img>*/}
                    <h1 className={"memberName"}>
                        Saurav Lamichhane
                    </h1>
                    <h2 className={"email"}>
                        slamich2@oswego.edu
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
                    <h1>
                        Summary
                    </h1>
                    <h3>
                        dksjvn
                    </h3>
                </div>
            </div>

        </ReactCardFlip>


    );
}