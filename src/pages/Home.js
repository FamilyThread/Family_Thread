import NavigationBar from "../components/NavigationBar";
import '../styles/home.css'
import FeaturedTrees from "../components/FeaturedTrees";
import {Helmet} from 'react-helmet';
import RecentTree from "../components/RecentTrees";


function Home() {
    let user = "Saurav";
    return (
        <>
            <NavigationBar />
            <Helmet>
                <style>{'body { background-color: #A7BEAE; }'}</style>
            </Helmet>

            <div className="body">
                <h1>Hello, {user}</h1>
                <FeaturedTrees />
                <RecentTree />
            </div>
        </>
    );
}


export default Home;
