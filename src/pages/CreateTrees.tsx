import {NavigationBar} from "../components/NavigationBar.tsx";
import axios from "axios";
import {backend_url} from "../assets/constant.ts";
import {FormEvent, useEffect, useState} from "react";
import {Separator} from "../components/separator.tsx";
import importLogo from "../assets/import.png";
import "../styles/createTrees.css";
import {useNavigate} from "react-router-dom";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";

export function CreateTrees() {

    const [treeName, setTreeName] = useState("");
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
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <NavigationBar/>
            <div className="createTreesBody">
                <h2 className="title">Create a tree</h2>
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

                <Separator/>

                <div className="external">

                    <div className="rect-container">
                        <div className="white-box">
                            {/*<img src={importLogo} alt="Import A Tree"/>*/}
                        </div>
                        <div className="box-caption">
                            Create an empty tree
                        </div>
                    </div>

                    <div className="rect-container">
                        <div className="white-box">
                            <img src={importLogo} alt="Import A Tree"/>
                        </div>
                        <div className="box-caption">
                            Import Data
                        </div>
                    </div>
                </div>
                <Separator/>

                <h2 className="title"> Templates </h2>

                <div className="template-grid">
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 1
                            </div>
                        </div>
                    </div>
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 2
                            </div>
                        </div>
                    </div>
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 3
                            </div>
                        </div>
                    </div>
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 4
                            </div>
                        </div>
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
