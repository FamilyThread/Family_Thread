import {NavigationBar} from "../components/NavigationBar.tsx";
import axios from "axios";
import {backend_url} from "../assets/constant.ts";
import {useState} from "react";
import {Separator} from "../components/separator.tsx";
import importLogo from "../assets/import.png";
import ThumbsUp from "../assets/ThumbsUp.png";
import "../styles/createTrees.css";


export function CreateTrees() {
    const [treeName, setTreeName] = useState("");

    const createNewTree = async () => {
        const response = await axios.post(backend_url + "/tree/new", {
            "treeName": treeName
        }, {withCredentials: true})
        const data = response.data;
        console.log(data);
        return data
    }

    // @ts-ignore
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        // Process the file upload here
        console.log(file);
    };

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
                    <a className="rect-container" href="../CreateAEmptyTree">
                        <div className="white-box">
                            <img src={ThumbsUp} alt="Import A Tree"/>
                        </div>
                        <div className="box-caption" >
                            Create an empty tree
                        </div>
                    </a>

                    {/* Upload button replacing the second rect-container */}
                    <label className="rect-container">
                        <div className="white-box">
                            <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
                            <img src={importLogo} alt="Import A Tree" style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="box-caption">
                            Import Data
                        </div>
                    </label>
                </div>
                <Separator/>

                <h2 className="title">Templates</h2>
                <div className="template-grid">
                    <a className="grid-col" href="../displayTrees">
                        <div className="rect-container">
                            <div className="white-box">
                                Soney & Lia
                            </div>
                            <div className="box-caption">
                                Template 1
                            </div>
                        </div>
                    </a>
                    <div className="grid-col">
                        <a className="rect-container" href={"../JoestarTemplate"}>
                            <div className="white-box">
                                Joestar Family Tree
                            </div>
                            <div className="box-caption">
                                Template 2
                            </div>
                        </a>
                    </div>
                    <div className="grid-col">
                        <a className="rect-container" href={"../DonaldTemplate"}>
                            <div className="white-box">
                                Donald Duck Family Tree
                            </div>
                            <div className="box-caption">
                                Template 3
                            </div>
                        </a>
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
                    <Separator/>
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
