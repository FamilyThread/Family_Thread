import axios from "axios";
import {backend_url} from "../assets/constant.ts";

export const getTreeData = async (treeId: string) => {
    try {
        const response = await axios.get(backend_url + "/tree/" + treeId, { withCredentials: true });
        const jsonData = response.data.jsonData;
        const ans = jsonData.map((jsonString: string) => JSON.parse(jsonString));
        console.log(ans);
        return ans; // Return the data
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
        throw error; // Rethrow the error to handle it in the caller
    }
};
