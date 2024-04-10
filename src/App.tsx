import {Routes, Route} from "react-router-dom"
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {Backend_MyAccount} from "./pages/Backend_MyAccount.tsx";
import {Login} from "./pages/Login.tsx";
import {DisplayTrees} from "./pages/DisplayTrees.tsx";
import {TestingGrounds} from "./testpages/TestingGrounds.tsx";
import {Error_404} from "./pages/error/Error404.tsx";
import {Error_403} from "./pages/error/Error403.tsx";
// import {CreateTreeTest} from "./testpages/CreateTreeTest.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";

import {TreeFunctionTest} from "./testpages/TreeFunctionTest.tsx";
import {AvailableTreeTest} from "./testpages/AvailableTreeTest.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {SharedTreeTest} from "./testpages/SharedTreeTest.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/viewtrees" element={<ViewTrees />}/>
                {/*<Route path="/createtrees" element={<CreateTrees />}/>*/}
                <Route path="/myaccount" element={<MyAccount />}/>
                <Route path="/displaytrees" element={<DisplayTrees/>}/>
                <Route path="/createtrees" element={<CreateTrees/>}/>
                <Route path="/displaytrees/:treeId" element={<DisplayTrees/>}/>
                <Route path="/403" element={<Error_403/>}/>
                <Route path="*" element={<Error_404/>}/>
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
