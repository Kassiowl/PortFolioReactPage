import "./css/about-me.css"
import Picture from "./picture/person.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge, Button } from "react-bootstrap";
function AboutMe() {
  return(
    <div className="about-me">
        <Container fluid="xs">
          <Row>
            <Col sm={12} md={8} lg={6} xxl={5}>
              <div className="text">
              <h2>About me</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Impedit esse soluta similique cumque quo nobis dolores labore voluptate nesciunt aliquam obcaecati repudiandae, 
                repellat corrupti, adipisci perspiciatis recusandae. Consectetur, ducimus placeat!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam, aut quas voluptatibus ipsum at rem dolorum! Distinctio error maxime officiis, vero reiciendis, 
                quis nemo neque aperiam eius perspiciatis accusantium veniam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam, aut quas voluptatibus ipsum at rem dolorum! Distinctio error maxime officiis, vero reiciendis, 
                quis nemo neque aperiam eius perspiciatis accusantium veniam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam, aut quas voluptatibus ipsum at rem dolorum! Distinctio error maxime officiis, vero reiciendis, 
                quis nemo neque aperiam eius perspiciatis accusantium veniam.</p>
              </div>
            </Col>
            <Col>
              <div className="person">
                <img src={Picture} alt="person" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
  
  export default AboutMe;
  