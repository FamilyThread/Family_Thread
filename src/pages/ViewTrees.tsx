import {NavigationBar} from "../components/NavigationBar.tsx";
import {MyTreesViewTrees} from "../components/MyTreesViewTrees.tsx";
import {FeaturedTrees} from "../components/FeaturedTrees.tsx";
import {RecentTree} from "../components/RecentTree.tsx";
import {Separator} from "../components/separator.tsx";
<<<<<<< Updated upstream
=======
import "../styles/sectionTitle.css"
>>>>>>> Stashed changes
// import {ImageMyTrees} from "../components/imageMyTrees.tsx";

export function ViewTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>

            <NavigationBar />

            <div className="">

                {/*<ImageMyTrees/>*/}
                {/*<Separator/>*/}


                <MyTreesViewTrees/>
                <Separator/>
                <RecentTree/>
                <Separator/>
                <FeaturedTrees/>
            </div>
        </>
    );
}
