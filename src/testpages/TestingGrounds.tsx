// import { useEffect } from 'react';
import { EditPersonPopup } from "../components/EditPersonPopup.tsx";
import { NavigationBar } from "../components/NavigationBar.tsx";
import {useEffect} from "react";
import { Family } from './Familytree.tsx';
import {ImageConversion} from "../components/ImageConversion.tsx";

// import SearchFunction from "../components/SearchPopup.tsx";

export function TestingGrounds() {
    useEffect(() => {
        const familyTreeContainer = document.getElementById('tree');
        if (familyTreeContainer) {
            Family(familyTreeContainer);
        } else {
            console.error("Element with ID 'tree' not found.");
        }
    }, []);

    return (
        <>
            <NavigationBar/>
            <EditPersonPopup/>
            <br/>
            <a href='/myaccounttest'> My Account Backend Test</a><br/>
            <a href='/treefunctiontest'>Tree Function Test</a> <br/>
            <a href='/available-trees'>User Created Trees</a> <br/>
            <a href='/shared-trees'>Shared Trees</a>

            <div id="tree"></div>
            <div id="tree2">
                <button> Fit to Tree</button>
                <button> Fit to Height</button>
                <button> Fit to Width</button>
            </div>
            <div id="tree3"></div>

            <br/>
            <a href='/myaccounttest'> My Account Backend Test</a><br/>
            <a href='/treefunctiontest'>Tree Function Test</a> <br/>
            <a href='/available-trees'>Available Trees</a>

            <ImageConversion />

            <br/>
            <br/>
            <br/>


        </>
    );
}
