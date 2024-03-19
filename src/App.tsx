import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home.tsx";
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {Login} from "./pages/Login.tsx";

function App() {
    return (
    <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/ViewTrees" element={<ViewTrees />}/>
                <Route path="/CreateTrees" element={<CreateTrees />}/>
                <Route path="/MyAccount" element={<MyAccount />}/>
            </Routes>
    </>
    );
}

export default App;
