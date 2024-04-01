import {NavigationBar} from "../components/NavigationBar.tsx";


export function CreateTrees() {
    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <NavigationBar />
<<<<<<< Updated upstream

=======
            <h2>
                <ImportText />
            </h2>
            <div className="">
                <Container>
                    <h1>Blank Tree/Import Files</h1>
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
>>>>>>> Stashed changes
        </>
    );
}
