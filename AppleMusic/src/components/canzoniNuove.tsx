import { Card, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

const NuoveUscite = () => {
  return (
    <>
      <div className=" bg-dark p-4">
        <h1 className=" text-start text-light fs-6">
          Nuove Uscite{" "}
          <span className=" text-secondary">
            <IoIosArrowForward />
          </span>
        </h1>
        <Row>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src="https://placehold.co/400x400"
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                Qui ci va il nome della canzone
              </Card.Text>
              <Card.Text>Qui ci va il nome dell'artista</Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src="https://placehold.co/400x400"
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                Qui ci va il nome della canzone
              </Card.Text>
              <Card.Text>Qui ci va il nome dell'artista</Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src="https://placehold.co/400x400"
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                Qui ci va il nome della canzone
              </Card.Text>
              <Card.Text>Qui ci va il nome dell'artista</Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src="https://placehold.co/400x400"
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                Qui ci va il nome della canzone
              </Card.Text>
              <Card.Text>Qui ci va il nome dell'artista</Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src="https://placehold.co/400x400"
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                Qui ci va il nome della canzone
              </Card.Text>
              <Card.Text>Qui ci va il nome dell'artista</Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src="https://placehold.co/400x400"
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                Qui ci va il nome della canzone
              </Card.Text>
              <Card.Text>Qui ci va il nome dell'artista</Card.Text>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NuoveUscite;
