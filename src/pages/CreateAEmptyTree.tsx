import {NavigationBar} from "../components/NavigationBar.tsx";
import FamilyTreeChart from "../components/FamilyTreeChart.ts";

export function CreateAEmptyTree(){
    return (
        <>
            <NavigationBar/>

            <div style={{height: "100%"}}>

                <FamilyTreeChart nodes={[
                    { id: 1, pids: [2], name: 'null', gender: 'null', img: 'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png'},

                ]} />
            </div>

        </>
    );
}
