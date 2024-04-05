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
                nodes: this.props.nodes,

                nodeBinding: {
                    field_0: 'name',
                    img_0: 'img'
                }
            });
        }
    }

    render() {
        return React.createElement('div', { id: 'tree', ref: this.divRef });
    }

}