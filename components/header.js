import { Nav, Navbar } from 'react-bootstrap';
import React, { useState } from 'react';
import NavigationList from './navigation-list';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar bg="none" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="/">smnmtchll</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="main-nav">
          <NavigationList />
        </Nav>
      </Navbar.Collapse>

      <div className="social">
        <Nav.Link href="https://github.com/smnmtchll" target="_blank">
          <img src="img/layout/icons/github.svg" />
        </Nav.Link>
      </div>
      <div className="small-nav">
        <Nav.Link href="#" onClick={() => setOpen(true)}>
          <img src="img/layout/icons/menu-thin.svg" />
        </Nav.Link>
      </div>
      <div className={open ? 'nav-modal open' : 'nav-modal closed'}>
        <div className="close-nav">
          <Nav.Link href="#" onClick={() => setOpen(false)}>
            <img src="img/layout/icons/cross-thin.svg" />
          </Nav.Link>
        </div>
        <Nav className="small-nav-list">
          <NavigationList />
        </Nav>
        <div className="small-nav-social">
          <Nav.Link href="https://github.com/smnmtchll" target="_blank">
            <img src="img/layout/icons/github-black.svg" />
          </Nav.Link>
        </div>
      </div>
      <style global jsx>{`
        .main-nav ul {
          list-style: none;
        }
        .main-nav ul li {
          float: left;
        }
        .active {
          border-bottom: 1px solid;
        }
        .social {
          margin-left: 20px;
          display: block;
        }
        .social a:hover {
          transform: rotate(20deg);
        }
        .small-nav {
          display: none;
          margin-right: -12px;
        }
        .small-nav-list {
          width: 100%;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        .small-nav-list ul {
          list-style: none;
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .small-nav-list ul li a {
          text-transform: uppercase;
          font-weight: 100;
          font-size: 2rem !important;
          color: rgba(0, 0, 0, 0.4) !important;
          text-align: center;
          padding-bottom: 0;
        }
        .small-nav-list .active {
          border-bottom: none;
          color: #000 !important;
          border-bottom: 1px solid;
        }
        .small-nav-social {
          margin: 0;
          position: absolute;
          top: 90%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .open {
          display: block;
        }
        .closed {
          display: none;
        }
        .nav-modal {
          position: fixed;
          top: 8%;
          left: 5%;
          width: 90%;
          height: 60%;
          -moz-border-radius: 2px;
          -webkit-border-radius: 2px;
          border-radius: 2px;
          -khtml-border-radius: 2px;
          background-color: rgba(250, 250, 250, 0.9);
        }
        .close-nav {
          float: right;
          margin-top: 5px;
        }
        @media only screen and (max-width: 575px) {
          .navbar-brand {
            padding-top: auto;
            margin-top: 0;
          }
          .social {
            display: none;
          }
          .small-nav {
            display: block;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
