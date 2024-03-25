import treeFamilies from "../../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
import {ViewTreeTreesScroll} from "./viewTreesNuclearFamily.tsx";
export function FeaturedTreesViewTrees() {
    return (
        <>
            <Container>
                <h2></h2>
                <h1>Featured Trees</h1>
                <Row className="g-0">
                    {treeFamilies.map(item => (
                            <Col key={item.id}>
                                <ViewTreeTreesScroll {...item} />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    );
}