import React, {Component, RefObject} from "react";
import FamilyTree from "@balkangraph/familytree.js";


interface ChartProps {
    nodes: any[];
}

export default class FamilyTreeChart extends Component<ChartProps> {
    private readonly divRef: RefObject<HTMLDivElement>;
    // @ts-ignore
    private family: FamilyTree | undefined;

    constructor(props:ChartProps) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        if (this.divRef.current) {
            this.family = new FamilyTree (this.divRef.current , {
                mouseScrool: FamilyTree.action.none,
                nodes: this.props.nodes,
                enableSearch: false,
                // template: "john",
                nodeMouseClick: FamilyTree.action.details,
                // editForm: {titleBinding: "Name", photoBinding: "ImgUrl"},

                nodeTreeMenu: true,
                nodeBinding: {
                    field_0: 'name',
                    img_0: 'img'
                }
            });
            this.family.onUpdateNode((args) => {
                console.log(args)
            })
        }
    }

    render() {
        return React.createElement('div', { id: 'tree', ref: this.divRef });
    }
}
