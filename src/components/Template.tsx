import treeFamilies from "../data/templateTrees.json"
import {Col, Container, Row} from "react-bootstrap";
import {ImportTemplate} from "./ImportTemplate.tsx";

export function Template() {
    return (
        <>
            <Container>
                <Row className="g-0">
                    {treeFamilies.map(item => (
                            <Col key={item.name}>
                                <ImportTemplate {...item} />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    );
}
