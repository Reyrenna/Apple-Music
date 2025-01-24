import { Card, Col, Row } from "react-bootstrap"




function CardGrandi(){
    return(
    <div className=" bg-dark p-4">
    <div className=" border-bottom border-secondary">
    <h1 className=" text-start text-light mb-2">Novità</h1>
    </div>
    
 <Row className=" mt-2">
    <Col sx={6}>
    <Card className=" bg-transparent text-start  text-light p-0 border-0">
        <Card.Text className="text-secondary m-0 nuovaStazioneRadio">
        NUOVA STAZIONE RADIO
        </Card.Text>
        <Card.Body className="p-2 pt-0 ps-0">
            <Card.Text className="p-1 pt-0 ps-0">
Rilassati, al resto pensiamo noi. 
Ascolta Apple Music Chill
            </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="\images\1a.png" className="rounded-1 w-100"/>
    </Card>
    </Col>
    <Col sx={6}>
    <Card className=" bg-dark text-start  text-light p-0 border-0">
        <Card.Text className="text-secondary m-0 nuovaStazioneRadio">
        NUOVA STAZIONE RADIO
        </Card.Text>
        <Card.Body className="p-2 pt-0 ps-0">
            <Card.Text className="p-1 pt-0 ps-0">
Ecco la nuova Casa della musica Latina
            </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="\images\1b.png" className=" rounded-1 w-100" />
    </Card>
    </Col>
 </Row>
 </div>)
}

export default CardGrandi