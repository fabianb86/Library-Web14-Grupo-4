import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../img/logo_library.png";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class Topmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Logout() {
    cookies.remove("_s");
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" variant="dark">
        <Container>
          <img className="logo" src={logo} alt="logo" />
          <Navbar.Brand href="#home">
            {" "}
            Grupo 14 MinTic Equipo 4 <span id="usuario-sub-branm"></span>
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            </Nav>

            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>Usuario</Row>
                <Dropdown.Divider />
              </Dropdown.Header>
              <Dropdown.Item onClick={() => this.Logout()}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Cerrar Sesion
              </Dropdown.Item>
              {/*  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
