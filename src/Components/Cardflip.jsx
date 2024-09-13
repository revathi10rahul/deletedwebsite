import React from 'react';
import './cardflip.css';
import { Col, Row } from 'react-bootstrap';
import work from '../Assets/work.jpg'
import { Card } from 'react-bootstrap';
function Cardflip() {
  return (
    <div>
      <Row className="text-center">
        <Col >
          <h1 style={{ padding: '0px', background: '#e1e1e1',width:"1290px" }} className='ms-5'>Heading</h1>
        </Col>
      </Row>
      <Row ></Row>
      <Row xs={1} md={2} className="g-4">
     
        <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Card className='carddiv'>
            <Card.Img className='cardimage' variant="top" src={work} />
            <Card.Body>
              <Card.Title>3PL-Warehouse Management
              </Card.Title>
              <Card.Text>
              Unlock the Power of Efficiency and Growth with Our WMS Software for 3PL Service Providers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Card className='carddiv'>
            <Card.Img className='cardimage' variant="top" src={work} />
            <Card.Body>
              <Card.Title>E-Commerce Fulfillment
              </Card.Title>
              <Card.Text>
              Transform Your E-commerce Fulfilment Centre with Cutting-Edge Automation Software.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
  );
}

export default Cardflip;
