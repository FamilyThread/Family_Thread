// import treeFamilies from "../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
// import {HomeNuclearFamily} from "./HomeNuclearFamily.tsx";
import previewFile from "../data/ViewTreesTreePreview.json";
// import {BlankImport} from "./BlankImport.tsx";
import {ViewTreesScroll} from "./ViewTreesTreeScroll.tsx";
<<<<<<< Updated upstream
=======
import "../styles/sectionTitle.css"
>>>>>>> Stashed changes
export function MyTreesViewTrees() {
    return (
        <>
            <Container>
                <h2></h2>
<<<<<<< Updated upstream
                <h1>My Trees</h1>
=======
                <h2>My Trees</h2>
>>>>>>> Stashed changes
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