import {NavigationBar} from "../components/NavigationBar.tsx";
import {ImportText} from "../components/ImportText.tsx";
import {Template} from "../components/Template.tsx";
import {RecentTree} from "../components/RecentTree.tsx";

export function CreateTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <NavigationBar />
            <h2>
                <ImportText />
            </h2>
            <div className="">
                <Template />
                <RecentTree />
            </div>
        </>
    );
}