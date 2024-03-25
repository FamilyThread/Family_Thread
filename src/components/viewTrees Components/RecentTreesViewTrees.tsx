import treeFamilies from "../../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
import {ViewTreeTreesScroll} from "./viewTreesNuclearFamily.tsx";
export function RecentTreesViewTrees() {
    return (
        <>
            <Container>
                <h2></h2>
                <h1>My Trees</h1>
                <Row className="g-0">
                    {treeFamilies.map(item => (
                            <Col key={item.id}>
                                < ViewTreeTreesScroll {...item}/>
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    );
}