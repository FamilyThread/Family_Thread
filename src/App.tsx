import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home.tsx";
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {EditTree} from "./pages/insideViewTrees/EditTree.tsx";

function App() {
    return (
    <>
            <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route path="/ViewTrees" element={<ViewTrees />}/>
                <Route path="/CreateTrees" element={<CreateTrees />}/>
                <Route path="/MyAccount" element={<MyAccount />}/>
                <Route path="/EditTree" element={<EditTree />}/>
            </Routes>
    </>
    );
}

export default App;