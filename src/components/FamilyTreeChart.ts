import React, {Component, RefObject} from "react";
import FamilyTree from "@balkangraph/familytree.js";
import {removeNode, sendNewNodes, updateNode} from "../utils/nodeOperations.ts";
import {backend_url} from "../config/constant.ts";
import none = FamilyTree.none;


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
                mouseScrool: FamilyTree.action.none,
                nodes: this.props.nodes,
                enableSearch: false,
                template: "hugo",
                nodeMouseClick: FamilyTree.action.details,
                ...(userPermission.canEdit && {nodeTreeMenu: true}),
                editForm: {
                    readOnly: userPermission.canView && !userPermission.canEdit,
                    generateElementsFromFields: false,
                    addMore: "",
                    elements: [
                        {type: 'textbox', label: 'Full Name', binding: 'name'},
                        {
                            type: "select", options: [
                                {value: "male", text: "Male"},
                                {value: "female", text: "Female"}
                            ], label: "Gender", binding: "gender"
                        },
                        [
                            {type: 'date', label: 'Birth Date', binding: 'dateOfBirth'},
                            {type: 'date', label: 'Death Date', binding: 'dateOfDeath'},
                        ],
                        {type: 'textbox', label: 'Place of Birth', binding: 'placeOfBirth'},
                        {type: 'textbox', label: 'Description', binding: 'description'},
                        {type: 'textbox', label: 'Photo Url', binding: 'img'},
                    ],
                    buttons: {
                        edit: {
                            icon: FamilyTree.icon.edit(24, 24, '#fff'),
                            text: 'Edit',
                            hideIfEditMode: true,
                            hideIfDetailsMode: false
                        },
                        share: {
                            icon: FamilyTree.icon.share(24, 24, '#fff'),
                            text: 'Share',
                            hideIfEditMode: true,
                            hideIfDetailsMode: true
                        },
                        pdf: {
                            icon: FamilyTree.icon.pdf(24, 24, '#fff'),
                            text: 'Save as PDF'
                        },
                        remove: null
                    },
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

