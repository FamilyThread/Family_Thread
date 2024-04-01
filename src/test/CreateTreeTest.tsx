import {NavigationBar} from "../components/NavigationBar.tsx";
import {ImportText} from "../components/ImportText.tsx";
import {Template} from "../components/Template.tsx";
import {RecentTree} from "../components/RecentTree.tsx";
import axios from "axios";
import {backend_url} from "../assets/constant.ts";
import {useState} from "react";

export function CreateTreeTest() {

    const [treeName, setTreeName] = useState("");

    const createNewTree = async () => {
        const response = await axios.post(backend_url + "/tree/new", {
            "treeName": treeName
        },{ withCredentials: true })
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
            <h2>Create a tree</h2>
            <form onSubmit={() => {
                createNewTree().then(r => console.log("data here" + r))
            }}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="TreeName"
                        value={treeName}
                        onChange={(e)=> setTreeName(e.target.value)}
                    />
                </label>
            <input type="submit" value="Submit" />

            </form>
            <h2>
                <ImportText/>
            </h2>
            <div className="">
            <Template/>
                <RecentTree/>
            </div>
        </>
    );
}