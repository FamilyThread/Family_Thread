// import treeFamilies from "../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
// import {HomeNuclearFamily} from "./HomeNuclearFamily.tsx";
import previewFile from "../data/ViewTreesTreePreview.json";
// import {BlankImport} from "./BlankImport.tsx";
import {ViewTreesScroll} from "./ViewTreesTreesScroll.tsx";
export function ImageMyTrees() {
    return (
        <>
            <Container>
                <h2></h2>
                <h1>My Trees</h1>
                <Row className="g-0">
                    {previewFile.map(item => (
                            <Col key={item.name}>
                                <ViewTreesScroll {...item} />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    );
}