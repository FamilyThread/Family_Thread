import React, {Component, RefObject} from "react";
import FamilyTree from "@balkangraph/familytree.js";
import {removeNode, sendNewNodes, updateNode} from "../utils/nodeOperations.ts";
import {backend_url} from "../config/constant.ts";


interface ChartProps {
    nodes: any[];
    permissions: {
        canEdit: boolean;
        canView: boolean;
        canDelete: boolean;
    }
}


export default class FamilyTreeChart extends Component<ChartProps> {

    private readonly divRef: RefObject<HTMLDivElement>;
    private family: FamilyTree | undefined;

    constructor(props: ChartProps) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        if (this.divRef.current) {
            const userPermission = this.props.permissions;
            this.family = new FamilyTree(this.divRef.current, {
                // Image testing
                // exportUrl: backend_url + "/images/new",

                mouseScrool: FamilyTree.action.none,
                nodes: this.props.nodes,
                enableSearch: false,
                template: "hugo",
                nodeMouseClick: FamilyTree.action.details,

                // editForm: {titleBinding: "Name", photoBinding: "ImgUrl"},

                ...(userPermission.canEdit && {nodeTreeMenu: true}),

                editForm: {
                    readOnly: userPermission.canView && !userPermission.canEdit,


                    generateElementsFromFields: false,
                    elements: [
                        {type: "textbox", label: "Name", binding: "name"},
                        {
                            type: "select", options: [
                                {value: "male", text: "Male"},
                                {value: "female", text: "Female"}
                            ], label: "Gender", binding: "gender"
                        }
                    ]
                },
                nodeBinding: {
                    field_0: 'name',
                    img_0: 'img'
                },
                menu: {
                    pdf: { text: "Export PDF" },
                    png: { text: "Export PNG" },
                    svg: { text: "Export SVG" },
                    json: { text: "Export JSON" },
                    importJSON: {text: "Import JSON", icon: FamilyTree.icon.json(24,24,'red'), onClick: this.family?.importJSON},
                },
            });


            this.family.onUpdateNode((args) => {
                const treeId = window.location.href.split("/displayTrees/")[1];
                console.log(args)
                if (args.addNodesData) {
                    sendNewNodes(args.addNodesData, treeId);
                }
                if (args.updateNodesData) {
                    updateNode(args.updateNodesData, treeId);
                }
                if (args.removeNodeId) {
                    removeNode(args.removeNodeId, treeId);
                }

            })
        }
    }

    render() {
        return React.createElement('div', {id: 'tree', ref: this.divRef});
    }
}

