import { Nav } from 'react-bootstrap';
import ActiveLink from '../helpers/active-link';

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <ActiveLink href="/projects">
            <Nav.Link>projects</Nav.Link>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/skills">
            <Nav.Link>skills</Nav.Link>
          </ActiveLink>
        </li>
      </ul>
      <style global jsx>{`
        ul {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Header;
