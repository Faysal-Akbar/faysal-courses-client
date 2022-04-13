import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo/logo.png";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      Let's <span className='text-warning'>Learn</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
     <div className='me-5'>
     <Link className='text-decoration-none text-warning mb-2 me-3' to="home">Home</Link>
     <Link className='text-decoration-none text-warning mb-2' to="courses">Courses</Link>
     </div>
      <Navbar.Text >
        Signed in as: <a href="#login">displayName</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    );
};

export default Header;