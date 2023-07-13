import "./css/about-me.css"
import Picture from "./picture/person.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getInfo } from '.././request/axios_request'
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


async function getAboutMe(){

  let result: Promise<AxiosResponse> = getInfo()
  let paragraphs: Object =  (await result).data['about_me']['paragraph']

  console.log(Object.values(paragraphs))
  return Object.values(paragraphs)
 }

function AboutMe() {

  const [paragraphs, setparagraphs] = useState<Array<string>>([]);


  useEffect(() =>{
    const fetchAboutMe = async() =>{
      try{
    
        const about_me = await getAboutMe()
        setparagraphs(about_me)
      }
      catch{
        setparagraphs(["something went wrong"])
      }

    }
    fetchAboutMe()
  }, [])


  return(
    <div className="about-me">
        <Container fluid="xs">
          <Row>
            <Col sm={12} md={8} lg={6} xxl={5}>
              <div className="text mb-4">
                <h2>About me</h2>
                {
                  paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
  