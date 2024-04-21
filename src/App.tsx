import {Routes, Route} from "react-router-dom"
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {Backend_MyAccount} from "./pages/Backend_MyAccount.tsx";
import {Login} from "./pages/Login.tsx";
import {DisplayTrees} from "./pages/DisplayTrees.tsx";
import {TestingGrounds} from "./testpages/TestingGrounds.tsx";
// import {CreateTreeTest} from "./testpages/CreateTreeTest.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {TreeFunctionTest} from "./testpages/TreeFunctionTest.tsx";
import {AvailableTreeTest} from "./testpages/AvailableTreeTest.tsx";
import {SharedTreeTest} from "./testpages/SharedTreeTest.tsx";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/viewtrees" element={<ViewTrees />}/>
                <Route path="/myaccount" element={<MyAccount />}/>
                <Route path="/displaytrees" element={<DisplayTrees/>}/>
                <Route path="/tests" element={<TestingGrounds />} />
                <Route path="/createtrees" element={<CreateTrees/>}/>
                <Route path="/displaytrees/:treeId" element={<DisplayTrees/>}/>
                <Route path="/403" element={<ErrorPage />}/>
                <Route path="*" element={<ErrorPage />}/>
                <Route path="/error" element={<ErrorPage />} />

            {/*    Testing Routes*/}
                <Route path="/tests" element={<TestingGrounds />} />
                <Route path="/myaccounttest" element={<Backend_MyAccount />}/>
                <Route path="/treefunctiontest" element={<TreeFunctionTest />}/>
                <Route path="/available-trees" element={<AvailableTreeTest/>}/>
                <Route path="/shared-trees" element={<SharedTreeTest/>}/>
            </Routes>
        </>
    );
}

export default App;
