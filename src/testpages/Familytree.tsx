// import FamilyTree from "@balkangraph/familytree.js";
// // import {useState} from "react";
// // import {backend_url} from "../config/constant.ts";
// // import axios from "axios";
// // import {useLocation} from "react-router-dom";
//
// // import css from './teststyles/personCreation.css'
//
// export function Family(container: HTMLElement) {
//
//     // const location = useLocation();
//     // const treeId = location.pathname.split("displayTrees/")[1];
//
//     // const [scale, setScale] = useState(1);
//     // const scales = [];
//
//     // const [scale, setScale] = useState({
//     //     initial: 1,
//     //     boundary: FamilyTree.match.boundary,
//     //     height: FamilyTree.match.height,
//     //     width: FamilyTree.match.width
//     // });
//     //
//     // // Function to update the scale value
//     // const updateScale = (newScaleValue: number) => {
//     //     setScale(currentScale => ({
//     //         ...currentScale,
//     //         initial: newScaleValue
//     //     }));
//     // };
//
//
//     // Templates: https://balkan.app/FamilyTreeJS/Docs/CSSCustomization
//     FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);
//     FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 24px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';
//     FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 206px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>';
//     // FamilyTree.templates.myTemplate.img_0 =
//
//
//     const treeFunction = () => {
//         FamilyTree.templates.tommy_female.field_0 =
//             '<text width="600px" style="font-size: 28px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
//
//         let family = new FamilyTree(container, {
//             // state: {
//             //     // readFromLocalStorage: true,
//             //     // writeToLocalStorage: true,
//             // },
//             mouseScrool: FamilyTree.action.ctrlZoom,
//             scaleInitial: 1,
//             template: 'tommy',
//             searchDisplayField: 'name',
//             searchFieldsWeight: {
//                 "name": 100, //percent
//                 "friends": 20 //percent
//             },
//             menu: {
//                 pdf: {text: "Export PDF"},
//                 json: {text: "Export JSON"}
//             },
//             mode: "light",
//             nodeTreeMenu: true,
//             nodeMenu: {
//                 scale: {
//                     text: "Change Scaling",
//                     // onClick: fitTreeScale
//                 }
//
//             },
//             editForm: {
//                 elements: [
//                     {type: 'textbox', label: 'Full Name', binding: 'name'},
//                     [
//                         {type: 'date', label: 'Birth Date', binding: 'Date of Birth'},
//                         {type: 'date', label: 'Death Date', binding: 'Date of Death'},
//                         {type: 'checkbox', label: 'Still Alive?', binding: 'Checkbox'}
//                     ],
//                     {type: 'textbox', label: 'Place of Birth'},
//                     {
//                         type: 'textbox', label: 'Description'
//                     }
//                 ],
//             }
//         });
//
//         // family.onUpdateNode((args) => {
//         //     const {updateNodesData} = args;
//         //
//         //
//         //     updateNodesData.forEach((node: any) => {
//         //         // You might need to cast or extract the `id` and other necessary properties properly based on your data structure
//         //         const nodeId = node.id;
//         //         if (nodeId) {
//         //             const updateUrl = `${backend_url}/trees/${treeId}/nodes/${nodeId}`;
//         //             axios.patch(updateUrl, node)
//         //                 .then(response => {
//         //                     console.log('Node updated successfully:', response.data);
//         //                 })
//         //                 .catch(error => {
//         //                     console.error('Error updating node:', error);
//         //                 });
//         //         }
//         //     });
//         // });
//
//         family.onInit(() => {
//         });
//
//         family.load([]);
//     }
//
//     return (
//         <>
//             <div style={{height: "100%"}}>
//                 {treeFunction()}
//             </div>
//         </>
//     );
//
//
// }
