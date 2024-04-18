import "../styles/sectionTitle.css"
import axios from "axios";
import {backend_url} from "../config/constant.ts";
import {useEffect, useState, } from "react";
// import image from "../assets/ViewTreesPlaceholder.png"
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Container} from "react-bootstrap";

interface Tree{
    treeId : string;
    treeName : string;
    image64 : string;
}

export function MyTreesViewTrees() {
    const [treeArray, setTreeData]   = useState<Tree[]>([]);
    const navigate = useNavigate();
    const getiDs= async () =>{
        const tree = await axios.get<{ treeId: string; treeName: string; image64: string; }[]>(backend_url + "/user/trees", { withCredentials: true });
        const treeData = tree.data;
        setTreeData(treeData);
        console.log(treeData);

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
        slidesToShow: 4,
        slidesToScroll: 1,

    };



    return (
        <>
            <Container>
                <h2 style={{marginTop: 90, marginBottom: 20}}>
                    My Trees
                </h2>
                <div>
                    <div>
                        <Slider {...settings}>
                            {treeArray.map((tree => (
                                <div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <img src={'data:image/png;base64,' + 'tree.image64'} alt={"placeholder"}></img>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: 10
                                    }}>
                                        <button className=" rounded-2 px-lg-5" onClick={() => handleTreeClick(tree.treeId)}>{tree.treeName}</button>
                                    </div>
                                </div>
                            )))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </>
    );
}
