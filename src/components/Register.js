import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row,Container } from "react-bootstrap";
import Footer from "./Footer";

//import "./RegisterScreen.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        " http://localhost:5000/auth/signup",
        {
          name,
          email,
          phone,
          password,
          role
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      //history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
    <Container style={{width:"600px"}}className="cont">
    <br></br>
    <div style={{textAlign:"center"}}><img src="https://cdn-icons.flaticon.com/png/512/4303/premium/4303979.png?token=exp=1640478522~hmac=27497f04ac8f587166a67c558552948b" width="150px"></img></div>
       <br></br>
    <Form onSubmit={registerHandler}>
    {/* name */}
    <Form.Group className="mb-3" controlId="formGridUsername"  id="name">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Enter your name" value={name}  onChange={(e) => setName(e.target.value)}
/>
    </Form.Group>
    
    {/* Email */}
    <Form.Group className="mb-3" controlId="formGridUsername" >
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)}
/>
    </Form.Group>

    {/* Phone */}
    <Form.Group className="mb-3" controlId="formGridUsername"  >
    <Form.Label>Phone</Form.Label>
    <Form.Control placeholder="Enter your phone number" value={phone}  onChange={(e) =>setPhone(e.target.value)}
 />
    </Form.Group>

    {/* Password */}
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label >Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) =>setConfirmPassword(e.target.value)}/>
    </Form.Group>
    </Row>
    

    {/* role */}
    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Role</Form.Label>
    <Form.Select defaultValue="user" >
    <option>User</option>
    <option>Service provider</option>
    </Form.Select>
    </Form.Group>
    
    
    {/* button  */}
    <div style={{textAlign:"center"}}>
    <Button style={{textAlign:"center"}} variant="outline-dark" type="submit" >
    Submit
    </Button></div>
   </Form>
   </Container>
   <Footer></Footer>
    </>
  );
};

export default Register;