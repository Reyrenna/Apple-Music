import { Carousel, Card, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

const NuoviEpisodi = () => {
  return (
    <>
      <div className=" bg-dark p-4">
        <h1 className=" text-start text-light fs-6">
          Nuovi Episodi Radio{" "}
          <span className=" text-secondary">
            <IoIosArrowForward />
          </span>
        </h1>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Card className=" bg-transparent text-start  text-secondary p-0 border-0">
                  <Card.Img
                    variant="top"
                    src="/images/2a.png"
                    className=" rounded-2"
                  />
                  <Card.Text>Pròlogo con Abuelo</Card.Text>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className=" bg-transparent text-start  text-secondary p-0 border-0">
                  <Card.Img
                    variant="top"
                    src="/images/2b.png"
                    className=" rounded-2"
                  />
                  <Card.Text>The Wanderer</Card.Text>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className=" bg-transparent text-start  text-secondary p-0 border-0">
                  <Card.Img
                    variant="top"
                    src="/images/2c.png"
                    className=" rounded-2"
                  />
                  <Card.Text>Michael Bublé & Carly Pearce</Card.Text>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Card className=" bg-transparent text-start  text-secondary p-0 border-0">
                  <Card.Img
                    variant="top"
                    src="/images/2d.png"
                    className=" rounded-2"
                  />
                  <Card.Text>Stephan Moccio: The Zane Lowe interview</Card.Text>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className=" bg-transparent text-start  text-secondary p-0 border-0">
                  <Card.Img
                    variant="top"
                    src="/images/2e.png"
                    className=" rounded-2"
                  />
                  <Card.Text>Chart Spotlight: Julia Michaels</Card.Text>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className=" bg-transparent text-start  text-secondary p-0 border-0">
                  <Card.Img
                    variant="top"
                    src="/images/2f.png"
                    className=" rounded-2"
                  />
                  <Card.Text>Karri & Travis Mills</Card.Text>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default NuoviEpisodi;
