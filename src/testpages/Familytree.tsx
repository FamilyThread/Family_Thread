import FamilyTree from "@balkangraph/familytree.js";
// import css from './teststyles/personCreation.css'

export function Family(container: HTMLElement) {

    // const [scale, setScale] = useState(1);

    // let scale = 1;
    // const fitTreeScale = () => {
    //     scale = (FamilyTree.match.boundary);
    //     root.render(treeFunction());
    // };
    // const fitTreeHeight = () => {
    //     scale = (FamilyTree.match.height);
    // };
    // const fitTreeWidth = () => {
    //     scale = (FamilyTree.match.width);
    // };


    // Templates: https://balkan.app/FamilyTreeJS/Docs/CSSCustomization
    FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);
    FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 24px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';
    FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 206px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>';
    // FamilyTree.templates.myTemplate.img_0 =



    const treeFunction = () => {

        FamilyTree.templates.tommy_female.field_0 =
            '<text width="600px" style="font-size: 28px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';

        var family = new FamilyTree(container, {
            // state: {
            //     // readFromLocalStorage: true,
            //     // writeToLocalStorage: true,
            // },
            mouseScrool: FamilyTree.action.ctrlZoom,
            scaleInitial: 1,
            template: 'tommy',
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
            nodeMenu: {
                scale: {
                    text: "Change Scaling",
                    // onClick: fitTreeScale
                }

            },
            editForm: {
                elements: [
                    {type: 'textbox', label: 'Full Name', binding: 'name'},
                    [
                        {type: 'date', label: 'Birth Date', binding: 'Date of Birth'},
                        {type: 'date', label: 'Death Date', binding: 'Date of Death'},
                        {type: 'checkbox', label: 'Still Alive?', binding: 'Checkbox'}
                    ],
                    {type: 'textbox', label: 'Place of Birth'},
                    {type: 'textbox', label: 'Description'
                    }
                ],
            }
        });

        family.onInit(() => {
        });

        family.load([]);
    }


    return (
        <>
            <div style={{height: "100%"}}>
                {treeFunction()}
            </div>
        </>
    );


}
