import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css';
import ProfilePic from '../images/Profile-Pic-BW-faded.png';
import BackgroundImage from '../images/cyber-edited-BW.jpg';

function Home() {
  return (
    <Container fluid className="home">
      <Row noGutters>
        <Col md="auto">
          <img
            src={ BackgroundImage }
            alt="BackgroundImage"
            style={{
              width: '500px'
            }}
          />
          <img
            src={ ProfilePic }
            alt="ProfilePic"
            style={{
              width: '400px',
              position: 'absolute',
              top: '2.6rem',
              left: '2rem'
            }}
          />
        </Col>
        <Col style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: '#ffffff' }}>
          <span>
            Hello! My name is Michael Coulter.
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
