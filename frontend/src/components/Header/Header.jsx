import React from 'react'
import { Container, Row, Button} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png'

const nav_links =[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">

          {/* logo start */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* logo end */}

          {/* Nav bar start */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item
                    .path}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* Nav bar start */}

        </div>
      </Row>
    </Container>
  </header>
}

export default Header

