import {NavigationBar} from "../components/NavigationBar.tsx";
import FamilyTreeChart from "../components/FamilyTreeChart.ts";
import {useEffect, useState} from "react";
import {getTreeData} from "../utils/getTree.ts";
import {useLocation} from "react-router-dom";
import "../styles/displayTrees.css";
import {SharePopUpBox} from "../components/SharePopUpBox.tsx";


export function DisplayTrees() {

    const [nodes, setNodes] = useState()
    const [isOwner, setIsOwner] = useState<Boolean>(false);

    const location = useLocation();
    const treeId = location.pathname.split("displayTrees/")[1];


    useEffect(() => {

        getTreeData(treeId).then(r => {
            setIsOwner(r.owner);
            const jsonData = r.jsonData;
            const nodes = jsonData.map((jsonString: string) => JSON.parse(jsonString));
            setNodes(nodes);
        })

    }, []);


    return (

        <>
            <NavigationBar/>

            <div style={{height: "100%"}}>
                {isOwner ? <SharePopUpBox treeId={treeId}/> : null}
                {nodes ? <FamilyTreeChart nodes={nodes}/> : <h1>Loading ...</h1>}
            </div>

        </>
    );
}
