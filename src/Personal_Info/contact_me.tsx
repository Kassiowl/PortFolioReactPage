import { Container, Form } from "react-bootstrap";
import "./css/contact_me.css"
function ContactMe() {
    return(
      <Container className="">
        <Form>
          <Form.Group className="m-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="m-4" controlId="subject">
            <Form.Label>subject</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group className="m-4" controlId="message">
            <Form.Label>message</Form.Label>
            <Form.Control as="textarea" className="text-area-custom-css" rows={10} />
          </Form.Group>
          <button className="btn btn-lg btn-info ms-4">Send</button>
        </Form>
      </Container>
      );
}


export default ContactMe;
    