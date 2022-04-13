import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo/logo.png';
import payment from '../../../images/payment/payment.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='bg-dark'>
        <Container>
          <Row className='text-white'>
            <Col className='pt-2 pb-2' sm={12} md={4}>
            <div className='d-flex'>
              <img
                alt=""
                src={logo}
                width="45"
                height="45"
                className="d-inline-block align-top me-2"
              />
              <h3>Let's <span className='text-warning'>Learn</span></h3>
            </div>
              <p> <b>Let's Learn</b> is a online based learning environment. It organized in 2019, developed by <b>Mohammed Faysal</b>. Let's Learn will give you many useful courses and resources.</p>
              <input className='w-75' type="text" name="text" placeholder='Search' id="" />
            </Col>
            <Col className='pt-2 pb-2' sm={12} md={4}>
            <h5>Social Networks</h5>
            <a href="https://www.facebook.com/profile.php?id=100013377882081" className='text-decoration-none text-white'><FontAwesomeIcon className="text-warning" icon={faFacebook} /> Facebook</a><br />
            <a href="https://www.linkedin.com/in/mohammed-faysal-414b8b1a0/" className='text-decoration-none text-white'> <FontAwesomeIcon className="text-warning" icon={faLinkedin} /> LinkedIn</a><br />
            <a href="*" className='text-decoration-none text-white'><FontAwesomeIcon className="text-warning" icon={faInstagram} /> Instagram</a><br />
            <a href="*" className='text-decoration-none text-white'> <FontAwesomeIcon className="text-warning" icon={faTwitter} /> Twitter</a>
            </Col>
            <Col className='pt-2 pb-2' sm={12} md={4}>
                <h5>Payment Us</h5>
                <img className='rounded' src={payment} alt="" />
            </Col>
          </Row>
        </Container>
        </div>
    );
};

export default Footer;