import {NavigationBar} from "../components/NavigationBar.tsx";
import FamilyTreeChart from "../components/FamilyTreeChart.ts";
import {useEffect, useState} from "react";
import {getTreeData} from "../utils/getTree.ts";
import {useLocation} from "react-router-dom";


export function DisplayTrees() {

    const [nodes, setNodes] = useState()

    const location = useLocation();
    const treeId = location.pathname.split("displayTrees/")[1];


    useEffect(() => {

        getTreeData(treeId).then(r => {
            setNodes(r)
        })

    }, []);


    return (
        <>
            <NavigationBar/>

            <div style={{height: "100%"}}>
                {nodes? <FamilyTreeChart nodes={nodes} />: <h1>Loading ...</h1>}

            </div>

        </>
    );
}