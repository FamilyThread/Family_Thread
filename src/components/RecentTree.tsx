// import treeFamilies from "../data/trees.json"
import {Col, Container, Row} from "react-bootstrap";
// import {HomeNuclearFamily} from "./HomeNuclearFamily.tsx";
import previewFile from "../data/ViewTreesTreePreview.json";
// import {BlankImport} from "./BlankImport.tsx";
import {ViewTreesScroll} from "./ViewTreesTreeScroll.tsx";
export function RecentTree() {
    return (
        <>
            <Container>
                <h2></h2>
<<<<<<< Updated upstream
                <h1>Recent Trees</h1>
=======
                <h2>Recent Trees</h2>
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
