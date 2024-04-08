import {NavigationBar} from "../components/NavigationBar.tsx";
import axios from "axios";
import {backend_url} from "../config/constant.ts";
import {useEffect, useState} from "react";


export function AvailableTreeTest() {

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
                alert("You don't have permission to view the page");
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
            setIds(r)
        })
    }, []);


    return (
        <>
            <NavigationBar />

            {ids ? ids.map((item, index) => (
                <>
                    <a href={`/displayTrees/${item}`} id={String(index)}>{item}</a><br/>
                </>
            )): null}
        </>
    )
}