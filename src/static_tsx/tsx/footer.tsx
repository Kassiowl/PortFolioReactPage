import "../css/footer.css"
import Linkedin from "../social_media_icons/linkedin.png"
import Github from "../social_media_icons/github.png"
import Medium from "../social_media_icons/medium.png"
import Python from "../tecnology_stacks_icons/python.png"
import Django from "../tecnology_stacks_icons/django.png"
import Aws from "../tecnology_stacks_icons/aws.png"
import { Link, BrowserRouter } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap"

function Footer() {
    return (
            <footer className="footer text-white">
                <Container fluid className="footer-info">
                    <Row>
                        <Col className="social-media d-flex flex-column align-items-start">
                                <h3 className="ms-4">Social media</h3>
                                <BrowserRouter>
                                    <Container className="row-container" fluid>
                                        <Row>
                                            <Col className="col-12">
                                            <div className="image-div">
                                                <Link to={"https://www.linkedin.com/in/kassiowallace/"} target="_blank">
                                                    <img src={Linkedin} alt="linkedin" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            <div className="image-div">
                                                <Link to={"https://medium.com/@kassiowl34"} target="_blank"> 
                                                    <img src={Medium} alt="medium" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            <div className="image-div">
                                                <Link to={"https://github.com/Kassiowl"} target="_blank">
                                                    <img src={Github} alt="github" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-12">
                                            <div className="image-div">
                                                <Link to={"https://www.linkedin.com/in/kassiowallace/"} target="_blank">
                                                    <img src={Linkedin} alt="linkedin" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            <div className="image-div">
                                                <Link to={"https://medium.com/@kassiowl34"} target="_blank"> 
                                                    <img src={Medium} alt="medium" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            <div className="image-div">
                                                <Link to={"https://github.com/Kassiowl"} target="_blank">
                                                    <img src={Github} alt="github" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </BrowserRouter>

                        </Col>
                        <Col className="tecnology-stacks d-flex flex-column align-items-end">
                            <h3 className="me-4">Tecnology Stacks</h3>
                            <div>
                                <BrowserRouter>
                                <Container className="row-container" fluid>
                                    <Row>
                                        <Col className="col-12">
                                            <div className="image-div">
                                                <Link to={"https://www.python.org/"} target="_blank" >
                                                    <img src={Python} alt="python" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            <div className="image-div">
                                                <Link to={"https://www.djangoproject.com/"} target="_blank" >
                                                    <img src={Django} alt="Django" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                            <div className="image-div">
                                                <Link to={"https://aws.amazon.com/pt/"} target="_blank" >
                                                    <img src={Aws} alt="aws" width={"70px"} height={"70px"}/>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-12">
                                            <div className="image-div">
                                                    <Link to={"https://www.python.org/"} target="_blank" >
                                                        <img src={Python} alt="python" width={"70px"} height={"70px"}/>
                                                    </Link>
                                                </div>
                                                <div className="image-div">
                                                    <Link to={"https://www.djangoproject.com/"} target="_blank" >
                                                        <img src={Django} alt="Django" width={"70px"} height={"70px"}/>
                                                    </Link>
                                                </div>
                                                <div className="image-div">
                                                    <Link to={"https://aws.amazon.com/pt/"} target="_blank" >
                                                        <img src={Aws} alt="aws" width={"70px"} height={"70px"}/>
                                                    </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                </BrowserRouter>
                            </div>
                    </Col>
                    </Row>
                </Container>
            </footer>
      );
  }
  
  export default Footer;