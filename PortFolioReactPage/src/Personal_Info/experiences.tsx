import { Col, Container, Row } from "react-bootstrap";
import Python from "../static_tsx/tecnology_stacks_icons/python.png"
import Django from "../static_tsx/tecnology_stacks_icons/django.png"
import Javascript from "../static_tsx/tecnology_stacks_icons/javascript.png"
import Html from "../static_tsx/tecnology_stacks_icons/html.png"
import CascadingSS from "../static_tsx/tecnology_stacks_icons/css.png"
import { AxiosResponse } from "axios";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { getInfo } from "../request/axios_request";
import exp from "constants";

async function getExperiences(){

  let result: Promise<AxiosResponse> = getInfo()
  let experiences: Object =  (await result).data['experiences']
  console.log(Object.values(experiences))
  return Object.values(experiences)
}


function useSetExperiences(){

    const [experiences, setExperiences] = useState<Array<any>>([]);
    useEffect(() =>{
      const fetchExperiences = async() =>{
        try{
      
          const experiences = await getExperiences()
          setExperiences(experiences)
        }
        catch{
          setExperiences(["something went wrong"])
        }
  
      }
      fetchExperiences()
    }, [])

    return experiences
}

function extractParagraphs(experience: any){
  return Object.values(experience.paragraph)
}
  
  
function Experiences() {
    const experiences = useSetExperiences();
  return(
    <>
      <Container>
        <Row>
          {
            experiences.map((experience) => (
              <Col sm={12} md={8} lg={6} xxl={4} className="mb-4 mt-4">
                <h2>{experience['title']}</h2>
                <h3>Activities</h3>
                {(extractParagraphs(experience)).map(function (p: any) {
                  return (
                    <p>{p}</p>
                  );
                })}
              <Container>
                <Row>
                <h4 className="text-center">Tecnologies Used</h4>
                <Col sm={6} className="w-50">
                  <h5>Front-End</h5>
                  <img src={Javascript} width={"40px"} height={"40px"} className="me-4"></img>
                  <img src={Html} width={"40px"} height={"40px"} className="me-4"></img>
                  <img src={CascadingSS } width={"40px"} height={"40px"} className="me-4"></img>
                </Col>
                <Col sm={6} className="float-right w-50">
                  <h5>Back-End</h5>
                  <img src={Python} width={"40px"} height={"40px"} className="me-4"></img>
                  <img src={Django} width={"40px"} height={"40px"} className="me-4"></img>
                </Col>
                </Row>
            </Container>
              </Col>
          ))}
          <Col sm={12} md={8} lg={6} xxl={4} className="mb-4 mt-4">
            <h2>Intern Developer - Sedes</h2>
            <h3>Activities</h3>
            <p> - A form based software with complex business rules, validation
              and huge feedback capabilities to the users. The form validates a
              series of rules where the values allowed on the fields depend on
              each other. The form supports bidirectional feedback meaning
              that any field can invalidate the other, no matter the order
              they've been filled.
            </p>
            <p>
              - Agile development and version control using gitlab
            </p>
            <p> 
              - Leadership in a small and beginner-level development team,
              meeting with stakeholders, translating software requirements
              and ticket creation with task delegation
            </p>
            <Container>
              <Row>
              <h4 className="text-center">Tecnologies Used</h4>
              <Col sm={6} className="w-50">
                <h5>Front-End</h5>
                <img src={Javascript} width={"40px"} height={"40px"} className="me-4"></img>
                <img src={Html} width={"40px"} height={"40px"} className="me-4"></img>
                <img src={CascadingSS } width={"40px"} height={"40px"} className="me-4"></img>
              </Col>
              <Col sm={6} className="float-right w-50">
                <h5>Back-End</h5>
                <img src={Python} width={"40px"} height={"40px"} className="me-4"></img>
                <img src={Django} width={"40px"} height={"40px"} className="me-4"></img>
              </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={4} className="mb-4 mt-4">
            <h2>Intern Developer - Sedes</h2>
            <h3>Activities</h3>
            <p> - A form based software with complex business rules, validation
              and huge feedback capabilities to the users. The form validates a
              series of rules where the values allowed on the fields depend on
              each other. The form supports bidirectional feedback meaning
              that any field can invalidate the other, no matter the order
              they've been filled.
            </p>
            <p>
              - Agile development and version control using gitlab
            </p>
            <p> 
              - Leadership in a small and beginner-level development team,
              meeting with stakeholders, translating software requirements
              and ticket creation with task delegation
            </p>
            <Container>
              <Row>
              <h4 className="text-center">Tecnologies Used</h4>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5>Front-End</h5>
              </Col>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5 className="text-end">Back-End</h5>
                <p></p>
              </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={4} className="mb-4 mt-4">
            <h2>Intern Developer - Sedes</h2>
            <h3>Activities</h3>
            <p> - A form based software with complex business rules, validation
              and huge feedback capabilities to the users. The form validates a
              series of rules where the values allowed on the fields depend on
              each other. The form supports bidirectional feedback meaning
              that any field can invalidate the other, no matter the order
              they've been filled.
            </p>
            <p>
              - Agile development and version control using gitlab
            </p>
            <p> 
              - Leadership in a small and beginner-level development team,
              meeting with stakeholders, translating software requirements
              and ticket creation with task delegation
            </p>
            <Container>
              <Row>
              <h4 className="text-center">Tecnologies Used</h4>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5>Front-End</h5>
              </Col>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5 className="text-end">Back-End</h5>
                <p></p>
              </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={4} className="mb-4 mt-4">
            <h2>Intern Developer - Sedes</h2>
            <h3>Activities</h3>
            <p> - A form based software with complex business rules, validation
              and huge feedback capabilities to the users. The form validates a
              series of rules where the values allowed on the fields depend on
              each other. The form supports bidirectional feedback meaning
              that any field can invalidate the other, no matter the order
              they've been filled.
            </p>
            <p>
              - Agile development and version control using gitlab
            </p>
            <p> 
              - Leadership in a small and beginner-level development team,
              meeting with stakeholders, translating software requirements
              and ticket creation with task delegation
            </p>
            <Container>
              <Row>
              <h4 className="text-center">Tecnologies Used</h4>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5>Front-End</h5>
              </Col>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5 className="text-end">Back-End</h5>
                <p></p>
              </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={12} md={8} lg={6} xxl={4} className="mb-4 mt-4">
            <h2>Intern Developer - Sedes</h2>
            <h3>Activities</h3>
            <p> - A form based software with complex business rules, validation
              and huge feedback capabilities to the users. The form validates a
              series of rules where the values allowed on the fields depend on
              each other. The form supports bidirectional feedback meaning
              that any field can invalidate the other, no matter the order
              they've been filled.
            </p>
            <p>
              - Agile development and version control using gitlab
            </p>
            <p> 
              - Leadership in a small and beginner-level development team,
              meeting with stakeholders, translating software requirements
              and ticket creation with task delegation
            </p>
            <Container>
              <Row>
              <h4 className="text-center">Tecnologies Used</h4>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5>Front-End</h5>
  
              </Col>
              <Col sm={12} md={8} lg={6} xxl={5}>
                <h5 className="text-end">Back-End</h5>
                <p></p>
              </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}
  
  export default Experiences;
  