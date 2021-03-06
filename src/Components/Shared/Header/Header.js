import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = event => {
    event.preventDefault()
    signOut(auth)
    localStorage.removeItem('token')
  }
  return (

    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"><h1>Wheels BD</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/product">Product</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
              {
                user ? (<>
                  <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={NavLink} onClick={handleSignOut} to="/">Signout</Nav.Link>
                </>) : (<>
                  <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
                  <Nav.Link as={NavLink} to="/login">Login</Nav.Link>

                </>)

              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;