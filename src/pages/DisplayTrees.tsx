import {NavigationBar} from "../components/NavigationBar.tsx";
import FamilyTreeChart from "../components/FamilyTreeChart.ts";
import {useEffect} from "react";
import axios from "axios";
import {backend_url} from "../assets/constant.ts";


export function DisplayTrees() {


    useEffect(() => {
           axios.get(backend_url + "/tree/66079b1fc0c0612c4c0479aa", {withCredentials: true})
               .then (r => {
                   console.log(r.data);
               })
               .catch(error => {
                   console.error("Error fetching data (CUstom) " + error);
                   window.location.href = backend_url + "/oauth2/authorization/google";
               })

    }, []);



    return (
        <>
            <NavigationBar/>

            <div style={{height: "100%"}}>

                <FamilyTreeChart nodes={[
                    { id: 1, pids: [2], name: 'Lia', gender: 'female', img: 'https://i.ibb.co/NCrWCBr/IMG-5982.jpg'},
                    { id: 2, pids: [1], name: 'Soney', gender: 'male', img: 'https://i.ibb.co/h8s31DY/Screenshot-2024-03-28-at-11-53-13-PM.png' },
                    { id: 3, mid: 1, pids: [4], fid: 2, name: 'Saurav', gender: 'male', img: 'https://i.ibb.co/j3Y9cDW/Screenshot-2024-03-29-at-12-05-46-AM.png' },
                    { id: 4, pids: [3], name: 'Jessica', gender: 'male', img: 'https://www.shape.com/thmb/ogUySuD3fA6mdNl21sq5wMi7g-8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Jessica-Alba-Interview-GettyImages-1242827004-c6ed09b1faa04c9db646700e3afa484e.jpg' },
                    { id: 5, mid: 1, fid: 2,pids:[6,7,8,9,10], name: 'Kerrie L', gender: 'female', img: 'https://i.ibb.co/72yHRht/Screenshot-2024-03-29-at-12-02-30-AM.png'  },
                    { id: 6, pids: [5], name: 'Henry1', gender: 'male', img: 'https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg'  },
                    { id: 7, pids: [5], name: 'Henry2', gender: 'male', img: 'https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg'  },
                    { id: 8, pids: [5], name: 'Henry3', gender: 'male', img: 'https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg'  },
                    { id: 9, pids: [5], name: 'Henry4', gender: 'male', img: 'https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg'  },
                    { id: 10, pids: [5], name: 'Henry5', gender: 'male', img: 'https://cdn.britannica.com/34/254634-050-C62ACCB9/British-Actor-Henry-Cavill-February-2024.jpg'  },
                ]} />
            </div>

        </>
    );
}