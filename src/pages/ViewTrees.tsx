import {NavigationBar} from "../components/NavigationBar.tsx";
import {FeaturedTrees} from "../components/FeaturedTrees.tsx";
import {RecentTree} from "../components/RecentTree.tsx";
import {MyTreesViewTrees} from "../components/MyTreesViewTrees.tsx";

export function ViewTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>

            <NavigationBar />

            <div className="">
                <MyTreesViewTrees />
                <RecentTree />
                <FeaturedTrees />
            </div>
        </>
    );
}