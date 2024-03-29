import {NavigationBar} from "../components/NavigationBar.tsx";
import {ImportText} from "../components/ImportText.tsx";
import {Col, Container, Row} from "react-bootstrap";
import previewFile from "../data/previewFile.json";
import Empty from "../data/UploadTree.json";
import {BlankImport} from "../components/BlankImport.tsx";

export function CreateTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <NavigationBar />
            <h1>
                <ImportText />
            </h1>
            <div className="">
                <Container>
                    <Row className="g-0">
                        {Empty.map(item => (
                                <Col key={item.name}>
                                    <BlankImport {...item} />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
                <Container>
                    <h1>Template</h1>
                    <Row className="g-0">
                        {previewFile.map(item => (
                                <Col key={item.name}>
                                    <BlankImport {...item} />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
                <Container>
                    <Row className="g-0">
                        {previewFile.map(item => (
                                <Col key={item.name}>
                                    <BlankImport {...item} />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
            </div>
        </>
    );
}