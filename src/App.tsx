import 'bootstrap/dist/css/bootstrap.css';
import './styles/nav.css';
import React from "react";
import CreateTrees from "./pages/CreateTrees";
import Home from "./pages/Home";
import ViewTrees from "./pages/ViewTrees";
import MyAccount from "./pages/MyAccount";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/pages/CreateTrees.js" element={<CreateTrees/>}/>
                <Route path="/pages/Home.js" element={<Home/>}/>
                <Route path="/pages/ViewTrees.js" element={<ViewTrees/>}/>
                <Route path="/pages/MyAccount.js" element={<MyAccount/>}/>
            </Routes>
        </>
    )

}

export default App;
