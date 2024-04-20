import {NavigationBar} from "../components/NavigationBar.tsx";
import {MyTreesViewTrees} from "../components/MyTrees2.tsx";
import {FeaturedTrees} from "../components/FeaturedTrees.tsx";
import {Separator} from "../components/separator.tsx";
import "../styles/sectionsInViewTrees.css"

export function ViewTrees() {
    return (
        <>

            <style>
                {document.body.style.backgroundColor = '#e5ded5'};
            </style>

            <NavigationBar />
            <div>
                <MyTreesViewTrees/>
                <Separator/>
                <FeaturedTrees/>
            </div>
        </>
    );
}
