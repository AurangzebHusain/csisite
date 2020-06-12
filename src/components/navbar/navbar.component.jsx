import React,{Component} from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Navbars extends Component {
  render() {
    return (
        <Navbar
          className="navbar-horizontal navbar-dark bg-transparent"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
             <Link to="/"><h2>CSI</h2></Link> 
            </NavbarBrand>
            <button
              aria-controls="navbar-primary"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/home">
                  Home
                     <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/about">
                  About
                     <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/ourteam">
                  Our Team
                     <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/alumni">
                  Alumni
                     <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/events">
                  Events
                     <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/upcomingevents">
                  Upcoming Events
                     <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contact">
                  Contact
                     <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
               
                
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
    )}}

    export default Navbars;