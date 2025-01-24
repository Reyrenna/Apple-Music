import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import AppleLogo from '/music.svg'

function NavApple() {
  return (
    <Navbar collapseOnSelect expand="lg" className="vertical bg-body-tertiary d-none" fixed="top">
    <Container className="d-flex flex-column align-self-baseline align-items-baseline">
    <Navbar.Toggle  />
    <Navbar.Collapse className='collasso'>
      <Navbar.Brand href="#">
        <img src={AppleLogo} alt="Apple Music" />
      </Navbar.Brand>
      

      <Form className="mb-3 d-flex mt-3">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <Nav className="flex-column align-items-baseline">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default NavApple;