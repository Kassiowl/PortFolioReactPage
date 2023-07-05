import { Col, Container, Row } from "react-bootstrap";
import "./css/portfolio.css"
function Portfolio() {
  return(
    <>
      <Container fluid="xs mt-4">
        <Row>
        <Col sm={12} md={8} lg={6} xxl={4}>
          <div className="mb-4 project">
            <h5>Project 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <a href="/">
                <img src="https://projectideasincse.files.wordpress.com/2017/07/web-localstn.jpg" width={500} height={500}></img>
              </a>
          </div>
          </Col>
        <Col sm={12} md={8} lg={6} xxl={4}>
          <div className="mb-4 project">
            <h5>Project 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <a href="/">
                <img src="https://projectideasincse.files.wordpress.com/2017/07/web-localstn.jpg" width={500} height={500}></img>
              </a>
            </div>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={4}>
          <div className="mb-4 project">
            <h5>Project 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <a href="/">
                <img src="https://projectideasincse.files.wordpress.com/2017/07/web-localstn.jpg" width={500} height={500}></img>
              </a>
            </div>
          </Col>
          
        </Row>
      </Container>
    </>
  
  )
  }
  
  export default Portfolio;
  