import {Col, Container, Row} from "react-bootstrap";
import previewFile from "../data/ViewTreesTreePreview.json";
import {ViewTreesScroll} from "./ViewTreesTreeScroll.tsx";
import "../styles/nav.css"
export function FeaturedTrees() {
    return (
        <>
            <Container>
                <h2></h2>
                <h2>Featured Trees</h2>
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
