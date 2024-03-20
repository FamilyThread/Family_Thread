import {NavigationBar} from "../../../../Desktop/CSC380/Family_Thread-main/src/components/NavigationBar.tsx";
import {FeaturedTrees} from "../../../../Desktop/CSC380/Family_Thread-main/src/components/FeaturedTrees.tsx";
import {RecentTree} from "../../../../Desktop/CSC380/Family_Thread-main/src/components/RecentTree.tsx";
import {MyTrees} from "../../../../Desktop/CSC380/Family_Thread-main/src/components/MyTrees.tsx";

export function ViewTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>

            <NavigationBar />

            <div className="">
                <MyTrees />
                <RecentTree />
                <FeaturedTrees />
            </div>
        </>
    );
}