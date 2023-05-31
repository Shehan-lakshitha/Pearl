import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section className="hero">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_Content">
                <h1>
                  Welecome <br /> to Sri Lanka
                </h1>
                <p>
                  Discover the beauty of Sri Lanka - pristine beaches, lush tea
                  plantations, ancient temples, and vibrant markets. Experience
                  warm hospitality, delicious cuisine, and create lifelong
                  memories. Explore Sri Lanka's wonders and let its enchanting
                  landscapes captivate you. Start your journey today!
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* hero section end */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="subtitle">What we serve</h5>
              <h2 className="service_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured tours start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h5 className="subtitle">Explore</h5>
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Featured tours start */}

      {/* Experience section start */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <h5 className="subtitle">Exprience</h5>
                <h2>
                  With our all Experience
                  <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  <br />
                  sed diam nonummy nibh euismod tincidunt ut <br /> laoreet
                  dolore magna aliquam erat
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12K+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter_box">
                  <span>2K+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15+</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">{/* TODO Need to images */}</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience section end */}

      {/* Gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h5 className="subtitle">Gallery</h5>
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery section start */}

      {/* Testimonial section start */}

      <section>
        <Container>
          <Col lg="12">
            <h5 className="subtitle">Fans Love</h5>
            <h2 className="testimonial_title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Container>
      </section>

      {/* Testimonial section start */}
    </>
  );
};

export default Home;
