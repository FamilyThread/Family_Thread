import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home.tsx";
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {Login} from "./pages/Login.tsx";
import FT from "./pages/App.tsx";
function App() {
    return (
    <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/ViewTrees" element={<ViewTrees />}/>
                <Route path="/CreateTrees" element={<CreateTrees />}/>
                <Route path="/MyAccount" element={<MyAccount />}/>
                <Route path="/index" element={<FT />}/>
            </Routes>
    </>
    );
}

export default App;
