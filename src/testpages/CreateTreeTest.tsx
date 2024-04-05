import {NavigationBar} from "../components/NavigationBar.tsx";
import axios from "axios";
import {backend_url} from "../assets/constant.ts";
import {FormEvent, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Empty from "../data/UploadTree.json";
import {BlankImport} from "../components/BlankImport.tsx";
import previewFile from "../data/previewFile.json";
import {useNavigate} from "react-router-dom";
import {checkUserLogInStatus} from "../utils/checkUserLoginStatus.ts";

export function CreateTreeTest() {

    const [treeName, setTreeName] = useState("");
    const navigate = useNavigate();

    const createNewTree = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.post(backend_url + "/tree/new", {
            "treeName": treeName
        },{ withCredentials: true })
        const data = response.data;

        navigate("/displayTrees/" + data.redirect);

    }

    useEffect(() => {
        checkUserLogInStatus().then(isLoggedIn => {
            if (!isLoggedIn) {
                navigate("/")
                alert("Please Login First");
            }
        })

    }, []);

    return (
        <>
            <style>
                {document.body.style.backgroundColor = '#6EA07F'};
            </style>
            <NavigationBar/>
            <h2>Create a tree</h2>
            <form onSubmit={(event) => {
                createNewTree(event)
            }}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="TreeName"
                        value={treeName}
                        onChange={(e) => setTreeName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit"/>

            </form>

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
        </>
    );
}
