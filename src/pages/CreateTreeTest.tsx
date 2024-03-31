import {NavigationBar} from "../components/NavigationBar.tsx";
import {ImportText} from "../components/ImportText.tsx";
import {Template} from "../components/Template.tsx";
import {RecentTree} from "../components/RecentTree.tsx";
import axios, {create} from "axios";
import {backend_url} from "../assets/constant.ts";

export function CreateTreeTest() {

    const createNewTree = async () => {
        try {
            const response = await axios.post(backend_url + "/createTree/new", {

            });
            console.log("POST request successful", response.data);
        } catch (error) {
            console.error("Error making POST request", error);
            // Handle error if needed
        }
    }

    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <NavigationBar/>
            <button onClick={createNewTree}> Create a tree</button>
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