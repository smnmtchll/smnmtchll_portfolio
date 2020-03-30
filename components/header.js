import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="none" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="/">smnmtchll</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/skills">skills</Nav.Link>
          <Nav.Link href="/projects">projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        .navbar-collapse .collapse {
          color: red;
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
