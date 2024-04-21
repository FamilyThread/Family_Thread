import FamilyTree from "@balkangraph/familytree.js";
import {useState} from "react";
// import {useState} from "react";
// import {backend_url} from "../config/constant.ts";
// import axios from "axios";
// import {useLocation} from "react-router-dom";

// import css from './teststyles/personCreation.css'

export function Family(container: HTMLElement) {

    // My Template: Add node cut off
    FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.myTemplate.size = [200, 200];
    FamilyTree.templates.myTemplate.node = '<circle cx="100" cy="100" r="100" fill="grey" stroke-width="1" stroke="#aeaeae"></circle>';
    FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate.img_0 =
        '<clipPath id="ulaImg">'
        + '<circle cx="100" cy="150" r="40"></circle>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80">'
        + '</image>';
    FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.myTemplate_male.size = [200, 200];
    FamilyTree.templates.myTemplate_male.node = '<circle cx="100" cy="100" r="100" fill="blue" stroke-width="1" stroke="#aeaeae"></circle>';
    FamilyTree.templates.myTemplate_male.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate_male.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate_male.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate_male.img_0 =
        '<clipPath id="ulaImg">'
        + '<circle cx="100" cy="150" r="40"></circle>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80">'
        + '</image>';

    //FamilyTree.templates.myTemplate_male.node = '<circle cx="100" cy="100" r="100" fill="#039be5" stroke-width="1" stroke="#aeaeae"></circle>';
    FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.myTemplate_female.size = [200, 200];

    //FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 16px;" fill="#ffff" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate_female.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate_female.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate_female.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate_female.node = '<circle cx="100" cy="100" r="100" fill="pink" stroke-width="1" stroke="#aeaeae"></circle>';

    FamilyTree.templates.myTemplate_female.img_0 =
        '<clipPath id="ulaImg">'
        + '<circle cx="100" cy="150" r="40"></circle>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80">'
        + '</image>';

    //Template
    FamilyTree.templates.Template2 = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.Template2.size = [200, 200];
    FamilyTree.templates.Template2.node = '<rect x="0" y="0" width="200" height="200" fill="grey" stroke-width="1" stroke="#aeaeae"></rect>';
    FamilyTree.templates.Template2.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2.img_0 =
        '<clipPath id="ulaImg">'
        + '<circle cx="100" cy="150" r="40"></circle>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80">'
        + '</image>';

    FamilyTree.templates.Template2_male = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.Template2_male.size = [200, 200];
    FamilyTree.templates.Template2_male.node = '<rect x="0" y="0" width="200" height="200" fill="blue" stroke-width="1" stroke="#aeaeae"></rect>';
    FamilyTree.templates.Template2_male.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2_male.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2_male.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2_male.img_0 =
        '<clipPath id="ulaImg">'
        + '<circle cx="100" cy="150" r="40"></circle>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80">'
        + '</image>';

    FamilyTree.templates.Template2_female = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.Template2_female.size = [200, 200];
    FamilyTree.templates.Template2_female.node = '<rect x="0" y="0" width="200" height="200" fill="pink" stroke-width="1" stroke="#aeaeae"></rect>';
    FamilyTree.templates.Template2_female.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2_female.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2_female.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template2_female.img_0 =
        '<clipPath id="ulaImg">'
        + '<circle cx="100" cy="150" r="40"></circle>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80">'
        + '</image>';

    //Template 3: Profile Picture Gets CutOff
    FamilyTree.templates.Template3 = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.Template3.size = [200, 200];
    FamilyTree.templates.Template3.node = '<rect x="0" y="0" width="200" height="200" fill="grey" stroke-width="1" stroke="#aeaeae"></rect>';
    FamilyTree.templates.Template3.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3.img_0 =
        '<clipPath id="ulaImg">'
        + '<rect x="0" y="100" width="200" height="100"></rect>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="0" y="100" width="200" height="100">'
        + '</image>';

    FamilyTree.templates.Template3_male = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.Template3_male.size = [200, 200];
    FamilyTree.templates.Template3_male.node = '<rect x="0" y="0" width="200" height="200" fill="blue" stroke-width="1" stroke="#aeaeae"></rect>';
    FamilyTree.templates.Template3_male.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3_male.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3_male.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3_male.img_0 =
        '<clipPath id="ulaImg">'
        + '<rect x="0" y="100" width="200" height="100"></rect>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="0" y="100" width="200" height="100">'
        + '</image>';

    FamilyTree.templates.Template3_female = Object.assign({}, FamilyTree.templates.hugo);
    FamilyTree.templates.Template3_female.size = [200, 200];
    FamilyTree.templates.Template3_female.node = '<rect x="0" y="0" width="200" height="200" fill="pink" stroke-width="1" stroke="#aeaeae"></rect>';
    FamilyTree.templates.Template3_female.field_0 = '<text style="font-size: 16px;" fill="#FFFFF" x="45" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3_female.field_1 = '<text style="font-size: 24px;" fill="#FFFFF" x="100" y="60" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3_female.field_2 = '<text style="font-size: 16px;" fill="#FFFFF" x="155" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.Template3_female.img_0 =
        '<clipPath id="ulaImg">'
        + '<rect x="0" y="100" width="200" height="100"></rect>'
        + '</clipPath>'
        + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="0" y="100" width="200" height="100">'
        + '</image>';


    //Template 4:
    FamilyTree.templates.medium = Object.assign({}, FamilyTree.templates.tommy);

    FamilyTree.templates.medium.defs +=
        `<style>
        .box-1, .box-2{
                                    color: #fff;
                                }
                                .photo-foreignobject{
                                    border-radius: 7px;
                                }
                                .photo{
                                    position: absolute;
                                    left: 0px;
                                    width: 100%;
                                    border-radius: 7px;
                                }</style>`;

    FamilyTree.templates.medium.name = '<text ' + FamilyTree.attr.width + '="230" class="name" style="font-size: 21px;font-weight:bold;" fill="#ffffff" x="10" y="110" text-anchor="start">{val}</text>';
    FamilyTree.templates.medium.birthDate = '<text style="font-size: 14px;" fill="#ffffff" x="10" y="30" text-anchor="start">b. {val}</text>';
    FamilyTree.templates.medium.cc = '<text style="font-size: 14px;" fill="#ffffff" x="10" y="50" text-anchor="start">{val}</text>';
    FamilyTree.templates.medium.address = '<text data-text-overflow="multiline" ' + FamilyTree.attr.width + '="230" style="font-size: 14px;" fill="#ffffff" x="10" y="70" text-anchor="start">{val}</text>';
    FamilyTree.templates.medium.img_0 = '';
    FamilyTree.templates.medium.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#757575" stroke-width="1" stroke="none" rx="7" ry="7"></rect>';
    FamilyTree.templates.medium.photo = '{val}';
    FamilyTree.templates.medium.start = 120;
    FamilyTree.templates.medium.mid = -45;
    FamilyTree.templates.medium.end = -250;

    FamilyTree.templates.medium_male = Object.assign({}, FamilyTree.templates.medium);
    FamilyTree.templates.medium_male.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="none" rx="7" ry="7"></rect>';
    FamilyTree.templates.medium_female = Object.assign({}, FamilyTree.templates.medium);
    FamilyTree.templates.medium_female.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#F57C00" stroke-width="1" stroke="none" rx="7" ry="7"></rect>';


    FamilyTree.templates.large = Object.assign({}, FamilyTree.templates.medium);
    FamilyTree.templates.large.size = [250, 250];
    FamilyTree.templates.large.start = 250;
    FamilyTree.templates.large.mid = 0;
    FamilyTree.templates.large.end = -250;
    FamilyTree.templates.large.name = '<text ' + FamilyTree.attr.width + '="230" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="10" y="240" text-anchor="start">{val}</text>';
    FamilyTree.templates.large.desc = '<text  data-text-overflow="multiline-6-ellipsis" ' + FamilyTree.attr.width + '="230" style="font-size: 14px;" fill="#ffffff" x="10" y="120" text-anchor="start">{val}</text>';

    FamilyTree.templates.large_male = Object.assign({}, FamilyTree.templates.large);
    FamilyTree.templates.large_male.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="none" rx="7" ry="7"></rect>';
    FamilyTree.templates.large_female = Object.assign({}, FamilyTree.templates.large);
    FamilyTree.templates.large_female.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#F57C00" stroke-width="1" stroke="none" rx="7" ry="7"></rect>';


    FamilyTree.templates.small = Object.assign({}, FamilyTree.templates.medium);
    FamilyTree.templates.small.size = [120, 120];
    FamilyTree.templates.small.start = 120;
    FamilyTree.templates.small.mid = 0;
    FamilyTree.templates.small.end = -120;
    FamilyTree.templates.small.name = '<text data-text-overflow="multiline" ' + FamilyTree.attr.width + '="100" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="10" y="90" text-anchor="start">{val}</text>';
    FamilyTree.templates.small.cc = '';
    FamilyTree.templates.small.address = '';
    FamilyTree.templates.small.desc = '';
    FamilyTree.templates.small_male = Object.assign({}, FamilyTree.templates.small);
    FamilyTree.templates.small_male.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="none" rx="7" ry="7"></rect>';

    FamilyTree.templates.small_female = Object.assign({}, FamilyTree.templates.small);
    FamilyTree.templates.small_female.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#F57C00" stroke-width="1" stroke="none" rx="7" ry="7"></rect>';

    // Template 5:
    FamilyTree.templates.sriniz = Object.assign({}, FamilyTree.templates.base);

    FamilyTree.templates.sriniz.size = [225, 90];
    FamilyTree.templates.sriniz.node =
        '<rect x="0" y="0" height="90" width="225" stroke-width="1" rx="15" ry="15"></rect>';


    FamilyTree.templates.sriniz.defs = `
<g transform="matrix(0.05,0,0,0.05,-13 ,-12)" id="heart">
    <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:#fff;stroke:red;stroke-miterlimit:10;stroke-width:24px" fill="red"></path><path d="M256,360a16,16,0,0,1-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06,25.22-56.33,55.53-56.33,20.4,0,35,10.63,44.1,20.41a6,6,0,0,0,8.72,0c9.11-9.78,23.7-20.41,44.1-20.41,30.31,0,55.22,25.27,55.53,56.33.28,27.1-9.31,52.13-29.3,76.5-9.38,11.44-26.4,29.73-65.7,56.41A16,16,0,0,1,256,360Z" fill="red"></path>
  </g>
  <g id="sriniz_male_up">
    <circle cx="15" cy="15" r="10" fill="#fff" stroke="#fff" stroke-width="1"></circle>
    ${FamilyTree.icon.ft(15, 15, '#039BE5', 7.5, 7.5)}
  </g>

  <g id="sriniz_female_up">
    <circle cx="15" cy="15" r="10" fill="#fff" stroke="#fff" stroke-width="1"></circle>
    ${FamilyTree.icon.ft(15, 15, '#FF46A3', 7.5, 7.5)}
  </g>`;


// Male
    FamilyTree.templates.sriniz_male = Object.assign({},
        FamilyTree.templates.sriniz
    );
    FamilyTree.templates.sriniz_male.node =
        '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#039BE5" stroke="#aeaeae" rx="15" ry="15"></rect>';

    FamilyTree.templates.sriniz_male.field_0 =
        '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="100" y="30">{val}</text>';
    FamilyTree.templates.sriniz_male.field_1 =
        '<text style="font-size: 12px; font-weight: bold;" fill="#ffffff" x="100" y="50">{val}</text>';

// Female
    FamilyTree.templates.sriniz_female = Object.assign({},
        FamilyTree.templates.sriniz
    );
    FamilyTree.templates.sriniz_female.node =
        '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#FF46A3" stroke="#aeaeae" rx="15" ry="15"></rect>';

    FamilyTree.templates.sriniz_female.field_0 =
        '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="100" y="30">{val}</text>';
    FamilyTree.templates.sriniz_female.field_1 =
        '<text style="font-size: 12px; font-weight: bold;" fill="#ffffff" x="100" y="50">{val}</text>';

    const expandIconMale =
        '<circle cx="97" cy="-16" r="10" fill="#039BE5" stroke="#fff" stroke-width="1"><title>Expand</title></circle>' +
        '<line x1="90" y1="-16" x2="104" y2="-16" stroke-width="1" stroke="#fff"></line>' +
        '<line x1="97" y1="-23" x2="97" y2="-9" stroke-width="1" stroke="#fff"></line>';

    const expandIconFemale =
        '<circle cx="97" cy="-16" r="10" fill="#FF46A3" stroke="#fff" stroke-width="1"></circle>' +
        '<line x1="90" y1="-16" x2="104" y2="-16" stroke-width="1" stroke="#fff"></line>' +
        '<line x1="97" y1="-23" x2="97" y2="-9" stroke-width="1" stroke="#fff"></line>';

    FamilyTree.templates.sriniz_male.plus = expandIconMale;
    FamilyTree.templates.sriniz_female.plus = expandIconFemale;

// Image
    const imgTemplate =
        '<clipPath id="ulaImg">' +
        '<rect  height="75" width="75" x="7" y="7" stroke-width="1" fill="#FF46A3" stroke="#aeaeae" rx="15" ry="15"></rect>' +
        '</clipPath>' +
        '<image x="7" y="7" preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" width="75" height="75">' +
        '</image>';

    FamilyTree.templates.sriniz_male.img_0 = imgTemplate;
    FamilyTree.templates.sriniz_female.img_0 = imgTemplate;

    FamilyTree.templates.sriniz_male.up =
        '<use x="195" y="0" xlink:href="#sriniz_male_up"></use>';
    FamilyTree.templates.sriniz_female.up =
        '<use x="195" y="0" xlink:href="#sriniz_female_up"></use>';

// Pointer
    FamilyTree.templates.sriniz.pointer =
        '<g data-pointer="pointer" transform="matrix(0,0,0,0,80,80)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">' +
        '<polygon fill="#039BE5" points="53.004,173.004 53.004,66.996 0,120" />' +
        '<polygon fill="#039BE5" points="186.996,66.996 186.996,173.004 240,120" />' +
        '<polygon fill="#FF46A3" points="66.996,53.004 173.004,53.004 120,0" />' +
        '<polygon fill="#FF46A3" points="120,240 173.004,186.996 66.996,186.996" />' +
        '<circle fill="red" cx="120" cy="120" r="30" />' +
        '</g></g>';

    const treeFunction = () => {


        var family = new FamilyTree(container, {

            // state: {
            //     // readFromLocalStorage: true,
            //     // writeToLocalStorage: true,
            // },
            mouseScrool: FamilyTree.action.ctrlZoom,
            scaleInitial: 1,
            template: 'myTemplate',
            nodeBinding: {field_1: "name", field_0: "Date of Birth", field_2: "Date of Death", img_0: "img"},
            searchDisplayField: 'name',
            searchFieldsWeight: {
                "name": 100, //percent
                "friends": 20 //percent
            },
            menu: {
                pdf: {text: "Export PDF"},
                json: {text: "Export JSON"}
            },

            mode: "light",
            nodeTreeMenu: true,

            editForm: {
                titleBinding: "name",
                photoBinding: "img",
                elements: [
                    {type: 'textbox', label: 'Full Name', binding: 'name'},
                    [
                        {type: 'date', label: 'Birth Date', binding: 'Date of Birth'},
                        {type: 'date', label: 'Death Date', binding: 'Date of Death'},
                        {type: 'checkbox', label: 'Still Alive?', binding: 'Checkbox'}
                    ],
                    {type: 'textbox', label: 'Place of Birth'},
                    {
                        type: 'textbox', label: 'Description'
                    },
                    {type: 'textbox', label: 'Photo Url', binding: 'img', btn: 'Upload'},
                ],
            }
        });

        family.onInit(() => {
        });

        family.load(
            [
                { id: 1, name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/1.jpg" },
                { id: 2, pid: 1, name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/2.jpg" },
                { id: 3, pid: 1, name: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/anim/1.gif" },
                { id: 4, pid: 1, name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/4.jpg" },
            ]);
    }

    return (
        <>
            <div style={{height: "100%"}}>
                {treeFunction()}
            </div>
        </>
    );

}
