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

    // @ts-ignore
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.name.endsWith('.tsx')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                console.log(content); // Debug: See the file content

                // Assuming the file name dictates the navigation logic
                const pageName = file.name.replace('.tsx', '');
                navigateToPage(pageName);
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a .tsx file');
        }
    };

    const navigateToPage = (pageName) => {
        // Logic to determine the correct URL based on pageName
        // For example, if pageName is 'JoestarTemplate', navigate to '../JoestarTemplate'
        window.location.href = `../${pageName}`;
    };

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
                    <a className="rect-container" href="../CreateAEmptyTree">
                        <div className="white-box">
                            <img src={null} alt="Import A Tree"/>
                        </div>
                        <div className="box-caption">
                            Create an empty tree
                        </div>
                    </a>

                    <label className="rect-container">
                        <div className="white-box">
                            <input value={importValue} type="file" onChange={handleFileUpload} style={{display: 'none'}}/>
                            <img src={importLogo} alt="Import A Tree" style={{cursor: 'pointer'}}/>
                        </div>
                        <div className="box-caption">
                            Import Data
                        </div>
                    </label>
                </div>
                <Separator/>

                <h2 className="Templates">Templates</h2>
                <div className="template-grid">
                    <a className="grid-col" href="../blank">
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
                        <a className="rect-container" href={"../blank"}>
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 2
                            </div>
                        </a>
                    </div>
                    <div className="grid-col">
                        <a className="rect-container" href={"../blank"}>
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 3
                            </div>
                        </a>
                    </div>
                    <div className="grid-col">
                        <a className="rect-container" href={"../blank"}>
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 4
                            </div>
                        </a>
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
