import { Form, Button, Container } from "react-bootstrap";
import Footer from "./Footer";

const Login = () => {
 return (
 <>
  <Container className="cont"  style={{width:"600px"}}>
  <br></br>

    <div style={{textAlign:"center"}}><img src="https://cdn-icons.flaticon.com/png/512/310/premium/310818.png?token=exp=1640478786~hmac=c82ea9607f4f0e32a89fd9881bbe9588" width="100px"></img></div>
    <br></br>
 <Form>
 <Form.Group className="mb-3" controlId="formBasicEmail">
 <Form.Label>Email</Form.Label>
 <Form.Control type="email" placeholder="Enter your email" />
 <Form.Text className="text-muted">
 </Form.Text>
 </Form.Group>
 
 <Form.Group className="mb-3" controlId="formBasicPassword">
 <Form.Label>Password</Form.Label>
 <Form.Control type="password" placeholder="Password" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicCheckbox">
 <Form.Check type="checkbox" label="Remember me" />
 </Form.Group>
 <div style={{textAlign:"center"}}>
 <Button variant="outline-dark" type="submit">
 Submit
 </Button></div>
 </Form>
 </Container>
 <Footer></Footer>
 </>
 );
 };
 export default Login;