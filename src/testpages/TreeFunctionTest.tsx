import {NavigationBar} from "../components/NavigationBar.tsx";
import {useEffect, useState} from "react";
import FamilyTreeChart from "../components/FamilyTreeChart.tsx";
import {getTreeDataTest} from "./getTreeTest.ts";

export function TreeFunctionTest() {
    const [nodes, setNodes] = useState();


    useEffect(() => {
        getTreeDataTest("660d6ee53ece14213a7279d2").then(r => {
            setNodes(r);
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
