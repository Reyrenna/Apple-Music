import { Nav, Navbar, Col, Row } from "react-bootstrap";
import LogoApple from "/apple.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function AppleNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Row className=" w-100">
          <Nav className="me-auto">
            <Col xs={4}>
              <Nav.Link
                href="#"
                className="text-start ps-4 text-danger fs-3 altezza"
              >
                <HiOutlineMenuAlt3 />
              </Nav.Link>
            </Col>
            <Col xs={4}>
              <Navbar.Brand href="#">
                <img src={LogoApple} alt="logo apple"></img>
              </Navbar.Brand>
            </Col>
            <Col xs={4}>
              <Nav.Link href="#" className=" text-end text-danger">
                Accedi
              </Nav.Link>
            </Col>
          </Nav>
        </Row>
      </Navbar>
    </>
  );
}

export default AppleNav;
