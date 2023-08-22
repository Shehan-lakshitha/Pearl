import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "./../assets/images/weather.png";
import guideImg from "./../assets/images/guide.png";
import customizationImg from "./../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Calculate the weather around your places of visit",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "High experience and realiable tour guide services",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Customize your tours according to your needs and budget",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
