import {NavigationBar} from "../components/NavigationBar.tsx";
import {MyTreesViewTrees} from "../components/viewTrees Components/MyTreesViewTrees.tsx";
import {FeaturedTreesViewTrees} from "../components/viewTrees Components/FeaturedTreesViewTrees.tsx";
import {RecentTreesViewTrees} from "../components/viewTrees Components/RecentTreesViewTrees.tsx";
import {Separator} from "../components/viewTrees Components/separator.tsx";

export function ViewTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>

            <NavigationBar />

            <div className="">
                <MyTreesViewTrees />
                <Separator/>
                <RecentTreesViewTrees />
                <Separator/>
                <FeaturedTreesViewTrees />
            </div>
        </>
    );
}