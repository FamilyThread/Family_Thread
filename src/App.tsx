import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home.tsx";
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {Login} from "./pages/Login.tsx";
import {DisplayTrees} from "./pages/DisplayTrees.tsx";
import {Error_404} from "./pages/error/Error404.tsx";
import {Error_403} from "./pages/error/Error403.tsx";
import {CreateTreeTest} from "./test/CreateTreeTest.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/viewtrees" element={<ViewTrees />}/>
                {/*<Route path="/createtrees" element={<CreateTrees />}/>*/}
                <Route path="/createtrees" element={<CreateTreeTest/>}/>
                <Route path="/myaccount" element={<MyAccount />}/>
                <Route path="/displaytrees/:treeId" element={<DisplayTrees/>}/>
                <Route path="/403" element={<Error_403/>}/>
                <Route path="*" element={<Error_404/>}/>

            </Routes>
        </>
    );
}

export default App;
