import {NavigationBar} from "../components/NavigationBar.tsx";
import axios from "axios";
import {backend_url} from "../config/constant.ts";
import {useEffect, useState} from "react";
export function AvailableTreeTest() {

    const [names, setNames] = useState([]);
    const [ids, setIds] = useState([]);


    const getTreesID = async () => {
        try {
            const response = await axios.get(backend_url + "/user/trees", {withCredentials: true})
            const jsonData = response.data;
            console.log(jsonData)
            return jsonData;
        } catch (error) {
            console.log(error)
            // @ts-ignore
            if (error.response && error.response.status === 403) {
                window.location.href = "/403";
            } else { // @ts-ignore
                if (error.message === "Network Error") {
                    window.location.href = backend_url + "/oauth2/authorization/google";
                }
            }
            throw error;
        }
    }

    useEffect(() => {
        getTreesID().then(r => {
            setNames(r.map((obj: { treeName: string; }) => obj.treeName));
            setIds(r.map((obj: { treeId: string; }) => obj.treeId));
        })
    }, []);


    return (
        <>
            <NavigationBar />

            {names ? names.map((item, index) => (
                <>
                    <a href={`/displayTrees/${ids[index]}`} id={String(index)}>{item}</a><br/>
                </>
            )): null}
        </>
    )
}
