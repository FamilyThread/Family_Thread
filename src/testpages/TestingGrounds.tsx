// import { useEffect } from 'react';
import { EditPersonPopup } from "../components/EditPersonPopup.tsx";
import { NavigationBar } from "../components/NavigationBar.tsx";
import {useEffect} from "react";
import { Family } from './Familytree.tsx';

export function TestingGrounds() {
    useEffect(() => {
        const familyTreeContainer = document.getElementById('tree');
        const familyTreeContainer2 = document.getElementById('tree3');
        if (familyTreeContainer) {
            Family(familyTreeContainer);
            Family(familyTreeContainer2);
        } else {
            console.error("Element with ID 'tree' not found.");
        }
    }, []);

    return (
        <>
            <NavigationBar/>
            <EditPersonPopup/>
            <div id="tree"></div>
            <div id="tree2">
                <button> Fit to Tree</button>
                <button> Fit to Height</button>
                <button> Fit to Width</button>
            </div>
            <div id="tree3"></div>


        </>
    );
}
