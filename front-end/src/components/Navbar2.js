import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
const Navbar2=()=>{
    const navigate=useNavigate();
    let auth =localStorage.getItem("user");
    auth=JSON.parse(auth)
    console.log(auth.user.email);
    const logout=()=>{ //to logout and clear data from localstorage
        localStorage.clear();
        navigate('/login'); //alternate way to redirect on sign up page
    }

    return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/blog">Blogs</Nav.Link>
                <Nav.Link href="/write">Write</Nav.Link>
                
                <Nav.Link href={`/profile/${auth.user.email}`} >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={logout} href="#" >
                  logout
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Navbar2;