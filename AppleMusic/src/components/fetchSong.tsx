import { useState, useEffect } from "react";
import { Canzoni } from "../type/song";
import { Card, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

function Fetch() {
  const [Song, setSong] = useState<null | Canzoni>(null);

  const getSong = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=Marco-Castello"
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
  console.log(Array);
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
                src={
                  Song?.data
                    ? Song?.data[0].artist.picture_medium
                    : "https://placehold.co/400x400"
                }
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                {Song?.data ? Song?.data[0].title : "Song Name"}
              </Card.Text>
              <Card.Text>
                {Song?.data ? Song?.data[0].artist.name : "Artist Name"}
              </Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src={
                  Song?.data
                    ? Song?.data[1].artist.picture_medium
                    : "https://placehold.co/400x400"
                }
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                {Song?.data ? Song?.data[1].title : "Song Name"}
              </Card.Text>
              <Card.Text>
                {Song?.data ? Song?.data[1].artist.name : "Artist Name"}
              </Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src={
                  Song?.data
                    ? Song?.data[2].artist.picture_medium
                    : "https://placehold.co/400x400"
                }
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                {Song?.data ? Song?.data[2].title : "Song Name"}
              </Card.Text>
              <Card.Text>
                {Song?.data ? Song?.data[2].artist.name : "Artist Name"}
              </Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src={
                  Song?.data
                    ? Song?.data[3].artist.picture_medium
                    : "https://placehold.co/400x400"
                }
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                {Song?.data ? Song?.data[3].title : "Song Name"}
              </Card.Text>
              <Card.Text>
                {Song?.data ? Song?.data[3].artist.name : "Artist Name"}
              </Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src={
                  Song?.data
                    ? Song?.data[4].artist.picture_medium
                    : "https://placehold.co/400x400"
                }
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                {Song?.data ? Song?.data[4].title : "Song Name"}
              </Card.Text>
              <Card.Text>
                {Song?.data ? Song?.data[4].artist.name : "Artist Name"}
              </Card.Text>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card className=" bg-transparent text-start  text-light p-0 border-0">
              <Card.Img
                src={
                  Song?.data
                    ? Song?.data[5].artist.picture_medium
                    : "https://placehold.co/400x400"
                }
                className=" rounded-2"
              />
              <Card.Text className=" m-0 fw-semibold">
                {Song?.data ? Song?.data[5].title : "Song Name"}
              </Card.Text>
              <Card.Text>
                {Song?.data ? Song?.data[5].artist.name : "Artist Name"}
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Fetch;
