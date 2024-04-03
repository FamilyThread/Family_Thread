import {Routes, Route} from "react-router-dom"
import {ViewTrees} from "./pages/ViewTrees.tsx";
// import {CreateTrees} from "./pages/CreateTrees.tsx";
import {Backend_MyAccount} from "./pages/Backend_MyAccount.tsx";
import {Login} from "./pages/Login.tsx";
import {DisplayTrees} from "./pages/DisplayTrees.tsx";
import {TestingGrounds} from "./testpages/TestingGrounds.tsx";
import {Error_404} from "./pages/error/Error404.tsx";
import {Error_403} from "./pages/error/Error403.tsx";
import {CreateTreeTest} from "./testpages/CreateTreeTest.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {EditTree} from "./pages/insideViewTrees/EditTree.tsx";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/viewtrees" element={<ViewTrees />}/>
                {/*<Route path="/createtrees" element={<CreateTrees />}/>*/}
                <Route path="/myaccount" element={<MyAccount />}/>
                <Route path="/displaytrees" element={<DisplayTrees/>}/>
                <Route path="/tests" element={<TestingGrounds />} />
                <Route path="/createtrees" element={<CreateTreeTest/>}/>
                <Route path="/myaccounttest" element={<Backend_MyAccount />}/>
                <Route path="/displaytrees/:treeId" element={<DisplayTrees/>}/>
                <Route path="/403" element={<Error_403/>}/>
                <Route path="*" element={<Error_404/>}/>
                <Route path="/EditTree" element={<EditTree />}/>

            </Routes>
        </>
    );
}

export default App;
