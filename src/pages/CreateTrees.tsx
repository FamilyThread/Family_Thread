import {NavigationBar} from "../components/NavigationBar.tsx";
<<<<<<< Updated upstream
import {ImportText} from "../components/ImportText.tsx";
=======
>>>>>>> Stashed changes
import {Template} from "../components/Template.tsx";
import {RecentTree} from "../components/RecentTree.tsx";

export function CreateTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
<<<<<<< Updated upstream
            <NavigationBar />
            <h2>
                <ImportText />
            </h2>
=======

            <NavigationBar />

>>>>>>> Stashed changes
            <div className="">
                <Template />
                <RecentTree />
            </div>
        </>
    );
}