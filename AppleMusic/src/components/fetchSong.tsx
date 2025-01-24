import { useState, useEffect } from "react";
import { Canzoni } from "../type/song";
import { Card, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

function Fetch() {
  const [Song, setSong] = useState<null | Canzoni>(null);

  const getSong = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=Nirvana"
      );
      if (response.ok) {
        const data = await response.json();
        setSong(data);
      } else {
        throw new Error("Errore nel recupero film");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSong();
  }, []);

  const Array = Song?.data.map;

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
                // src={Array.}
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
}

export default Fetch;
