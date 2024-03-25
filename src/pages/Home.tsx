import {NavigationBar} from "../components/NavigationBar.tsx";
import {FeaturedTrees} from "../components/home components/FeaturedTrees.tsx";
import {RecentTree} from "../components/home components/RecentTree.tsx";
import {WelcomeMessage} from "../components/home components/WelcomeMessage.tsx";
import {Separator} from "../components/viewTrees Components/separator.tsx";

export function Home() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>

            <NavigationBar />
            <h2>
                <WelcomeMessage />
            </h2>
            <div className="">
                <FeaturedTrees />
                <Separator/>
                <RecentTree />
            </div>
        </>
    );
}