import React from "react";
import CommonSection from "../shared/CommonSection";

import '../styles/tour.css';
import tourData from '../assets/data/tours';
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";

import { Container } from "reactstrap";
import { Row } from "reactstrap";

const Tours = () => {
  return (
    <>
      <CommonSection title={"All tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
