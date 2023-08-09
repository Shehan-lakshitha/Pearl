import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userID: "01", //need to set in backend
    userEmail: "test@gmail.com",
    fullName: "",
    questSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestsSize) + serviceFee;

  //send data to server
  const handleClick = (e) => {
    e.preventDefault();

    navigate("/thank-you");
  };

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} (
          {reviews?.length} )
        </span>
      </div>

      {/* Booking section start*/}

      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone number"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guests"
              id="guestsSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* Booking section end*/}

      {/* Booking bottom*/}

      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-fill"></i> 1 person{" "}
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charges </h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="total border-0 px-0">
            <h5>Total </h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button
          className="btn primary__btn w-100 mb-1 mt-4"
          onClick={handleClick}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
