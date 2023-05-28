import React from 'react';
import '../styles/home.css';

import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from './../shared/Subtitle';

const Home = () => {
  return (
    <>
    {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero_Content">
                <h1>Welecome <br/> to Sri Lanka</h1>
                <p>Discover the beauty of Sri Lanka - pristine beaches, lush tea plantations, ancient temples, and vibrant markets. Experience warm hospitality, delicious cuisine, and create lifelong memories. Explore Sri Lanka's wonders and let its enchanting landscapes captivate you. Start your journey today!</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt=''/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt=''/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* hero section end */}
    </>
  );
}

export default Home
