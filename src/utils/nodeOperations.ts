import axios from "axios";
import {backend_url} from "../config/constant.ts";

export const sendNewNodes = async (newNodes: object[], treeId: string) => {

    try {
        const response = await axios.post(backend_url + "/" + treeId  + "/add-nodes", {newNodes} , { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateNode = async (newNodes: object[], treeId: string) => {

    try {
        const response = await axios.post(backend_url + "/" + treeId + "/update-nodes", {newNodes}, {withCredentials: true});
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

export const removeNode = async (nodeId: string | number, treeId:string)=> {

    try {
        const response = await axios.post(backend_url + "/" + treeId + "/remove-nodes", {nodeId}, {withCredentials: true});
        return response.data;
    } catch (error) {
        console.log(error);
    }

}
