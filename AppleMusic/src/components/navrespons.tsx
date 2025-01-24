import {Container, Nav, Navbar} from 'react-bootstrap'
import LogoApple from '/apple.svg'
function AppleNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          
          <Nav className="me-auto d-flex justify-content-between">
            <Nav.Link href="#"></Nav.Link>
            <Navbar.Brand href="#"><img src={LogoApple} alt='logo apple'></img></Navbar.Brand>
            <Nav.Link href="#" className=' text-danger'>Accedi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )}

  export default AppleNav