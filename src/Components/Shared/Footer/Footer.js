import React from 'react';
import './Footer.css';
import { faFacebook, faGithub, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-auto  text-light">
      <div className="container my-5">
        <Row className='align-items-stretch'>
          <Col lg={4}>
            <div className="px-3 border-light border-end h-100">
              <h1 className='word'><span className='text-light fst-italic'>Wheel</span>BD</h1>
              <p className='text-secondary py-2'>For other cycling related terms (besides parts) see Glossary of cycling.. List of bicycle parts by alphabetic order: . Axle: as in the generic definition, a rod that serves to attach a wheel to a bicycle and provides support for bearings on which the wheel rotates. </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3 border-light border-end h-100">
              <h1>OUR SERVICES</h1>
              <div className='text-secondary'>
                <h5>All Services</h5>
                <h5>Delivery</h5>
                <h5>Shipping free</h5>
                <h5>Legal Notice</h5>
                <h5>About Us</h5>
              </div>

            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3 h-100">
              <h1>Contact Us</h1>
              <div className='d-flex mb-3'>
                <a className='text-decoration-none text-light' rel='noreferrer' target='_blank' href='https://www.facebook.com/arisha.anisha.984'><FontAwesomeIcon className='px-2 fs-1 fb' icon={faFacebook}></FontAwesomeIcon></a>
                <a className='text-decoration-none text-light' rel='noreferrer' target='_blank' href='https://github.com/Raddiya'><FontAwesomeIcon className='px-2 fs-1 github' icon={faGithub}></FontAwesomeIcon></a>
                <a className='text-decoration-none text-light' rel='noreferrer' target='_blank' href='mailto:raddiyasultana.612@gmail.com'><FontAwesomeIcon className='px-2 fs-1 google' icon={faGoogle}></FontAwesomeIcon></a>
                <a className='text-decoration-none text-light' rel='noreferrer' target='_blank' href='https://www.instagram.com'><FontAwesomeIcon className='px-2 fs-1 instagram' icon={faInstagram}></FontAwesomeIcon></a>
               
              </div>
              <h4>Email: <a className='text-info text-decoration-none' href='mailto:raddiyasultana.612@gmail.com' target='_blank' rel='noreferrer' >raddiyasultana.612@gmail.com</a> </h4>
              <h4>Phone: <a className='text-info text-decoration-none' href='tel:01950165071' target='_blank' rel='noreferrer'>01950165071</a> </h4>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row className='text-center'>
          <h4><span className='text-secondary'> &#169; Copyright all right reserved by <a className='text-decoration-none text-info' href="https://github.com/Raddiya" target='_blank' rel='noreferrer'>Raddiya sultana</a> in <span className='text-white'>2022</span></span></h4>
        </Row>
      </div>
    </footer>
    );
};

export default Footer;