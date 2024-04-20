import {NavigationBar} from "../components/NavigationBar.tsx";
import axios from "axios";
import {backend_url} from "../config/constant.ts";
import {FormEvent, useEffect, useState} from "react";
import {Separator} from "../components/separator.tsx";
import importLogo from "../assets/import.png";
import "../styles/createTrees.css";
import {useNavigate} from "react-router-dom";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";



export function CreateTrees() {
    const [treeName, setTreeName] = useState("");
    const [importValue, setImportValue] = useState("");
    const navigate = useNavigate();


    const createNewTree = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.post(backend_url + "/tree/new", {
            "treeName": treeName
        },{ withCredentials: true })
        const data = response.data;

        navigate("/displayTrees/" + data.redirect);
    }

    useEffect(() => {
        checkUserLogInStatus().then(isLoggedIn => {
            if (!isLoggedIn) {
                navigate("/error")
            }
        })

    }, []);

    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#e5ded5'};
            </style>
            <NavigationBar/>
            <div className="createTreesBody">

                <h2 className="title">Create a tree</h2>
                <div className="external">
                    <div className="rect-container justify-content-center align-content-center">
                        <h5>
                            Choose a tree name:
                        </h5>
                        <div className>
                            <form onSubmit={(event) => {
                                createNewTree(event)
                            }}>
                                <label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="TreeName"
                                        value={treeName}
                                        onChange={(e) => setTreeName(e.target.value)}
                                    />
                                </label>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>

                    <label className="rect-container">
                        <h5>
                            Import a tree:
                        </h5>
                        <button className="bg-white border-0"> Choose file...
                            <input value={importValue} type="file"
                                   style={{display: 'none'}}/>
                        </button>


                    </label>
                </div>
                <Separator/>

                <h2 className="Templates">Templates</h2>
                <div className="template-grid">
                    <a className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 1
                            </div>
                        </div>
                    </a>
                    <div className="grid-col">
                        <a className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 2
                            </div>
                        </a>
                    </div>
                    <div className="grid-col">
                        <a className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 3
                            </div>
                        </a>
                    </div>
                    <div className="grid-col">
                        <a className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 4
                            </div>
                        </a>
                    </div>
                </div>
                <div className="template-grid">

                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>

                            <div className="box-caption">
                                Template 5
                            </div>
                        </div>
                    </div>
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 6
                            </div>
                        </div>
                    </div>
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 7
                            </div>
                        </div>
                    </div>
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 8
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
