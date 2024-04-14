import React, {Component, RefObject} from "react";
import FamilyTree from "@balkangraph/familytree.js";
import {removeNode, sendNewNodes, updateNode} from "../utils/nodeOperations.ts";

interface ChartProps {
    nodes: any[];
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
            this.family = new FamilyTree(this.divRef.current, {
                mouseScrool: FamilyTree.action.none,
                nodes: this.props.nodes,
                enableSearch: false,
                // template: "john",
                nodeMouseClick: FamilyTree.action.details,
                // editForm: {titleBinding: "Name", photoBinding: "ImgUrl"},

                nodeTreeMenu: true,

                editForm: {
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

