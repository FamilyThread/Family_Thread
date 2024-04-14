import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/nav.css';

export function FeaturedTrees() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <Container>
            <h2>Featured Trees</h2>
            <Slider {...settings}>
                <div className="template-grid">
                    <a className="grid-col" href="../displayTrees">
                            <div className="white-box">
                                Soney & Lia
                            </div>
                            <div className="box-caption">
                                Template 1
                            </div>
                    </a>
                </div>
                <div className="template-grid">
                    <div className="grid-col">
                        <a className="rect-container" href={"../JoestarTemplate"}>
                            <div className="white-box">
                                Joestar Family Tree
                            </div>
                            <div className="box-caption">
                                Template 2
                            </div>
                        </a>
                    </div>
                </div>
                <div className="template-grid">
                    <div className="grid-col">
                        <a className="rect-container" href={"../DonaldTemplate"}>
                            <div className="white-box">
                                Donald Duck Family Tree
                            </div>
                            <div className="box-caption">
                                Template 3
                            </div>
                        </a>
                    </div>
                </div>
                <div className="template-grid">
                    <div className="grid-col">
                        <div className="rect-container">
                            <div className="white-box">
                                No Preview Available
                            </div>
                            <div className="box-caption">
                                Template 4
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </Container>
    );
}
