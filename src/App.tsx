import {Routes, Route} from "react-router-dom";
import {ViewTrees} from "./pages/ViewTrees.tsx";
import {CreateTrees} from "./pages/CreateTrees.tsx";
import {Backend_MyAccount} from "./pages/Backend_MyAccount.tsx";
import {Login} from "./pages/Login.tsx";
import {DisplayTrees} from "./pages/DisplayTrees.tsx";
import {CreateAEmptyTree} from "./pages/CreateAEmptyTree.tsx";
import {TestingGrounds} from "./testpages/TestingGrounds.tsx";
import {Error_404} from "./pages/error/Error404.tsx";
import {Error_403} from "./pages/error/Error403.tsx";
// import {CreateTreeTest} from "./testpages/CreateTreeTest.tsx";
import {MyAccount} from "./pages/MyAccount.tsx";
import {JoestarTemplate} from "./pages/Featured Trees/Joestar Tree/JoestarTemplate.tsx";
import {DonaldTemplate} from "./pages/Featured Trees/Donald Duck Family/DonaldTemplate.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/viewtrees" element={<ViewTrees />}/>
                <Route path="/myaccount" element={<MyAccount />}/>
                <Route path="/displaytrees" element={<DisplayTrees/>}/>
                <Route path="/CreateAEmptyTree" element={<CreateAEmptyTree/>}/>
                <Route path="/JoestarTemplate" element={<JoestarTemplate/>}/>
                <Route path="/tests" element={<TestingGrounds />} />
                <Route path="/createtrees" element={<CreateTrees/>}/>
                <Route path="/myaccounttest" element={<Backend_MyAccount />}/>
                <Route path="/displaytrees/:treeId" element={<DisplayTrees/>}/>
                <Route path="/DonaldTemplate" element={<DonaldTemplate/>}/>
                <Route path="/403" element={<Error_403/>}/>
                <Route path="*" element={<Error_404/>}/>
            </Routes>
        </>
    );
}

export default App;
