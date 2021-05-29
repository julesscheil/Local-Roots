import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import logo from "./images/lrlogo.jpeg";
import "./style.css";

function NavComponent(props) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <div className="navlinks">
          <Nav className="mr-auto">
            <a className="navbar-brand" href="/">
              <img src={logo} width="60" height="60" alt="" />
            </a>
            {props.logged_in ? (
              <div className="row">
                <Nav.Link href="/">For Sale</Nav.Link>
                <Nav.Link href="/forum">Forum</Nav.Link>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
                <div
                  className="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outline-success"
                    onClick={props.handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default NavComponent;
