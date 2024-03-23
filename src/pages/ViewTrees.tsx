import {NavigationBar} from "../components/NavigationBar.tsx";
import {RecentTree} from "../components/RecentTree.tsx";
import {FeaturedTrees} from "../components/FeaturedTrees.tsx";
import {MyTrees} from "../components/MyTree.tsx";


export function ViewTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>

            <NavigationBar/>
            <div className="">
                <MyTrees/>
                <RecentTree/>
                <FeaturedTrees/>
            </div>
        </>
    );
}
