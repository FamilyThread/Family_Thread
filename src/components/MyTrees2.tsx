import "../styles/sectionTitle.css"
import axios from "axios";
import {backend_url} from "../config/constant.ts";
import {useEffect, useState, } from "react";
import image from "../assets/ViewTreesPlaceholder.png"
import {useNavigate} from "react-router-dom";
import {Slider} from "@mui/material";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Row,Col, Container} from "react-bootstrap";

interface Tree{
    treeId : string;
    treeName : string;
}
export function MyTreesViewTrees() {
    const [treeArray, setTreeData]   = useState<Tree[]>([]);
    const navigate = useNavigate();
    const getiDs= async () =>{
        const tree= await axios.get<{ treeId: string; treeName: string }[]>(backend_url + "/user/trees", { withCredentials: true });
        const treeData = tree.data;
        setTreeData(treeData);
    }

    useEffect(() => {
        getiDs();
    }, []);

    const handleTreeClick = (treeId: string) => {
        navigate(`/displayTrees/${treeId}`);
    };

    const settings = {
        dot: true,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


    return (
        <>

            <div>
                <div>
                    <Container>
                        <h1>My Trees</h1>
                        {/*<Slider {...settings}>*/}
                        <Row className="gap-2">
                            {treeArray.map((tree) => (
                                <Col className="align-items-center">
                                    {/*tree preview. Need to be*/}
                                    <div className=" text-center">
                                        <img src={image} alt="Place holder image"></img>
                                    </div>
                                    {/*tree name*/}
                                    <div className="text-center">
                                        <button className="py-0 rounded-2 px-lg-5"
                                                onClick={() => handleTreeClick(tree.treeId)}> {tree.treeName} </button>

                                    </div>
                                </Col>
                            ))}
                        </Row>
                        {/*</Slider>*/}
                    </Container>
                </div>
            </div>
        </>
    );
}