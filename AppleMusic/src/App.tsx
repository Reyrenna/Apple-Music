import { Row, Col } from "react-bootstrap";
import "./App.css";
import NavApple from "./components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";

function App() {
  return (
    <>
      <Row>
        <Col md={3}>
          <NavApple></NavApple>
        </Col>
        <Col md={9} xs={12}>
          <Home />
        </Col>
      </Row>
    </>
  );
}

export default App;
