import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import './styles.scss'

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-style py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2020{" "}
                  <a
                    className="font-weight-bold ml-1"
                    target="_blank"
                  >
                    <img className="logo" src={require("assets/img/brand/logo.png")} alt="logo"/>
                    Blast
                  </a>
                </div>
              </Col>
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
                  <NavItem>
                    <NavLink>
                      <i class="icon fas fa-building"></i>
                      Sobre nós
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <i className="icon fab fa-whatsapp 3x" />                  
                      Whatsapp
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <i className="icon fab fa-instagram"></i>
                      Instagram
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <i class="icon fab fa-facebook-f"></i>
                      Facebook
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                    <i class="icon fas fa-exchange-alt"></i>
                      Trocas e devoluções
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
