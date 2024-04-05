import {EditTreeShowTree} from "../../components/inViewTrees/EditTreeShowTree.tsx";
import {EditPersonButton} from "../../components/inViewTrees/EditPersonButton.tsx";
import {AddPersonButton} from "../../components/inViewTrees/AddPersonButton.tsx";

export function EditTree() {
    return (
        <>
            <>
                <style>
                    {document.body.style.backgroundColor = '#BABABA'};
                </style>

            </>
            <h1><b> Edit Trees </b></h1>
            <EditTreeShowTree/>
            <h3><u>Tree Name</u></h3>
            <EditPersonButton/>
            <AddPersonButton/>
        </>
    );
}