import {NavigationBar} from "../components/NavigationBar.tsx";
import {MyTreesViewTrees} from "../components/MyTrees2.tsx";
import {FeaturedTrees} from "../components/FeaturedTrees.tsx";
// import {RecentTree} from "../components/RecentTree.tsx";
import {Separator} from "../components/separator.tsx";
import "../styles/sectionTitle.css"

export function ViewTrees() {
    return (
        <>

            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>


            <NavigationBar />
            <div>
                <MyTreesViewTrees/>
                <Separator/>
                <FeaturedTrees/>
                {/*<Separator/>*/}
                {/*<RecentTree/>*/}
            </div>
        </>
    );
}
