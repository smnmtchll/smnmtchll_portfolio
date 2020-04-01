import { Nav, Navbar } from 'react-bootstrap';
import ActiveLink from '../helpers/active-link';

const Header = () => {
  return (
    <Navbar bg="none" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="/">smnmtchll</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ActiveLink href="/projects" prefetch>
            <Nav.Link>projects</Nav.Link>
          </ActiveLink>
          <ActiveLink href="/skills" prefetch>
            <Nav.Link>skills</Nav.Link>
          </ActiveLink>
        </Nav>
      </Navbar.Collapse>

      <div className="social">
        <Nav.Link href="https://github.com/smnmtchll" target="_blank">
          <img src="img/layout/icons/github.svg" />
        </Nav.Link>
      </div>
      <style global jsx>{`
        .active {
          border-bottom: 1px solid;
        }
        .social {
          margin-left: 20px;
        }
        .social a:hover {
          transform: rotate(20deg);
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
