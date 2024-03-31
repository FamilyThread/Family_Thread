import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home.tsx";
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {Login} from "./pages/Login.tsx";
import {DisplayTrees} from "./pages/DisplayTrees.tsx";
import {TestingGrounds} from "./pages/TestingGrounds.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/viewtrees" element={<ViewTrees />}/>
                <Route path="/createtrees" element={<CreateTrees />}/>
                <Route path="/myaccount" element={<MyAccount />}/>
                <Route path="/displaytrees" element={<DisplayTrees/>}/>
                <Route path="/tests" element={<TestingGrounds />} />
            </Routes>
        </>
    );
}

export default App;
