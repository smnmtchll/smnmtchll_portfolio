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
      <style global jsx>{`
        .active {
          // text-transform: uppercase;
          border-bottom: 1px solid;
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
