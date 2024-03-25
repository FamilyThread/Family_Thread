import treeFamilies from "../../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
import {HomeNuclearFamily} from "./HomeNuclearFamily.tsx";
export function RecentTree() {
    return (
        <>
            <Container>
                <h2></h2>
                <h1>Recent Trees</h1>
                <Row className="g-0">
                    {treeFamilies.map(item => (
                            <Col key={item.id}>
                                <HomeNuclearFamily {...item} />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    );
}