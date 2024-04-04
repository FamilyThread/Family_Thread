import {NavigationBar} from "../components/NavigationBar.tsx";
import axios from "axios";
import {backend_url} from "../assets/constant.ts";
import {useState} from "react";
import {Separator} from "../components/separator.tsx";
import importLogo from "../assets/import.png";
import "../styles/createTrees.css";

export function CreateTreeTest() {

    const [treeName, setTreeName] = useState("");

    const createNewTree = async () => {
        const response = await axios.post(backend_url + "/tree/new", {
            "treeName": treeName
        }, {withCredentials: true})
        const data = response.data;
        console.log(data);
        return data
    }

    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <NavigationBar/>
            <div className="createTreesBody">
                <h2 className="title">Create a tree</h2>
                <form onSubmit={() => {
                    createNewTree().then(r => console.log("data here" + r))
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
