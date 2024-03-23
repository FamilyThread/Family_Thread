import treeFamilies from "../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
import {NuclearFamily} from "./NuclearFamily.tsx";
export function MyTrees() {
    return (
        <>
            <Container>
                <h1>My Trees</h1>
                <Row className="g-0">
                    {treeFamilies.map(item => (
                            <Col key={item.id}>
                                <NuclearFamily {...item} />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    );
}
