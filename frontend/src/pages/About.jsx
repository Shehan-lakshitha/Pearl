import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "../styles/about.css";
import Team from "../components/Team/Team";

const About = () => {
  return (
    <>
    {/* About the company and team section start */}
      <section className="AboutUs">
        <Container>
          <Row>
            <Col lg="12">
              <div className="content">
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus beatae tempore voluptatibus iusto blanditiis,
                  repudiandae voluptates earum consequuntur ex, autem recusandae
                  distinctio consectetur aspernatur id enim nesciunt molestias
                  temporibus provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident accusantium saepe quaerat aut aliquam, ab corrupti! Rerum impedit nisi pariatur aspernatur. Molestias architecto temporibus minus pariatur molestiae suscipit distinctio.
                </p>
              </div>
              <div className="slider">
                <h2>Our team</h2>
                <Team/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About the company and team section end */}
    </>
  );
};

export default About;
