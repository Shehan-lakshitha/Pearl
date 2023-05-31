import React from 'react'
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const quick_links =[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
];

const quick_links2 =[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]

const Footer = () => {
  return 
  <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</p>

            <div className="social_links" d-flex align-items-center gap-4>
              <span>
                <Link to='#'><i class="ri-youtube-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-fill"></i></Link>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
