// import treeFamilies from "../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
// import {HomeNuclearFamily} from "./HomeNuclearFamily.tsx";
import previewFile from "../data/ViewTreesTreePreview.json";
import {ViewTreesScroll} from "./ViewTreesTreeScroll.tsx";
import "../styles/sectionTitle.css"
export function MyTreesViewTrees() {
    return (
        <>
            <Container>
                <h2></h2>
                <h2>My Trees</h2>
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
