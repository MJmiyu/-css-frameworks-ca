import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components/macro';
import { HOME, NEWS, CONTACT } from '../pages/pages';

const Navigation = ({ page, onSetPage }) => {
  return (
    <Navbar expand="md">
      <Logo href="/">The YAY Company</Logo>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link active={page === HOME} onClick={() => onSetPage(HOME)}>
            Home
          </Link>
          <Link active={page === NEWS} onClick={() => onSetPage(NEWS)}>
            News
          </Link>
          <Link active={page === CONTACT} onClick={() => onSetPage(CONTACT)}>
            Contact
          </Link>
        </Nav>
        <Form inline>
          <SearchField type="text" placeholder="Search" />
          <SearchButton variant="outline-success">GO</SearchButton>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Logo = styled(Navbar.Brand)`
  #yay & {
    color: #e92569;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
  }
`;

const Link = styled(Nav.Link)`
  #yay & {
    color: #0a0a0a;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    background-color: ${({ active }) => (active ? '#fff' : '#efefef')};
  }
`;

const SearchButton = styled(Button)`
  #yay & {
    background-color: #e92569;
    color: #ffffff;
    font-size: 16px;
    border-radius: 0 0.25rem 0.25rem 0;
    border: 1px solid #e92569;
  }
`;

const SearchField = styled(FormControl)`
  #yay & {
    color: #767676;
    font-size: 15px;
    border-radius: 0.25rem 0 0 0.25rem;
  }
`;

export default Navigation;
