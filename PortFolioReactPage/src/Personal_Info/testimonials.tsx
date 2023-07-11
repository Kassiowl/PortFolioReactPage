import { Col, Container, Form, Row } from "react-bootstrap";

function Testimonials() {
  return(
    <>
       <Container fluid="xs">
        <Row>
        <Col sm={12} md={8} lg={6} xxl={3}>
          <div className="mb-4 mt-4 project">
            <h5>Persons'name</h5>
              <a href="/">
                <img src="https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg" width={50} height={50}></img>
              </a>
            <h6 className="mt-4">At Sedes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
          </div>
          </Col>
        <Col sm={12} md={8} lg={6} xxl={3}>
          <div className="mb-4 mt-4 project">
            <h5>Persons name</h5>
            <a href="/">
                <img src="https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg" width={50} height={50}></img>
              </a>
            <h6 className="mt-4">At Sedes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
            </div>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={3}>
          <div className="mb-4 mt-4 project">
            <h5>Persons name</h5>
            <a href="/">
                <img src="https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg" width={50} height={50}></img>
              </a>
            <h6 className="mt-4">At Sedes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
            </div>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={3}>
          <div className="mb-4 mt-4 project">
            <h5>Persons name</h5>
            <a href="/">
                <img src="https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg" width={50} height={50}></img>
              </a>
            <h6 className="mt-4">At Sedes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
            </div>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={3}>
          <div className="mb-4 mt-4 project">
            <h5>Persons name</h5>
            <a href="/">
                <img src="https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg" width={50} height={50}></img>
              </a>
            <h6 className="mt-4">At Sedes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Omnis fuga ipsa dolores non perspiciatis deserunt dicta consequatur amet harum quidem dolor aliquid in molestias, 
              nesciunt ab expedita quibusdam, laborum recusandae!</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h3>Have you worked with me? Give me your testimonial</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Form>
            <Form.Group className="m-4" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Kassio Wallace de Oliveira" />
            </Form.Group>
            <Form.Group className="m-4" controlId="whereweworked?">
              <Form.Label>Where we worked together</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="m-4" controlId="message">
              <Form.Label>Testimonial</Form.Label>
              <Form.Control as="textarea" className="text-area-custom-css" rows={15} />
            </Form.Group>
            <Form.Group className="m-4" controlId="linkedinprofile?">
              <Form.Label>Linkedin profile</Form.Label>
              <Form.Control type="text" placeholder="https://www.linkedin.com/in/kassiowallace/"/>
            </Form.Group>
            <button className="btn btn-lg ms-4">Send</button>
          </Form>
          </Col>
        </Row>
      </Container>
    </>
)
  }
  
  export default Testimonials;
  