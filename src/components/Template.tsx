<<<<<<< Updated upstream
import treeFamilies from "../data/templateTrees.json"
import {Col, Container, Row} from "react-bootstrap";
import {ImportTemplate} from "./ImportTemplate.tsx";

export function Template() {
    return (
        <>
            <Container>
                <Row className="g-0">
                    {treeFamilies.map(item => (
                            <Col key={item.id}>
                                <ImportTemplate {...item} />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </>
    );
}
=======
// Assuming createNewTree.json is a correct path and the JSON module is correctly configured
import treeFamilies from "../data/createNewTree.json";
import { Col, Container, Row } from "react-bootstrap";
// Corrected the component import, assuming it's a default export and renamed appropriately
import TemplateTree from "./templateTree";

export function Template() {
    return (
        <Container>
            <h1>START A NEW TREE</h1>
            <Row className="g-0">
                {treeFamilies.map(item => (
                    <Col key={item.id}>
                        {/* Corrected the component name to start with an uppercase letter */}
                        <TemplateTree {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
>>>>>>> Stashed changes
