import { Form, Button, Container, Carousel } from "react-bootstrap";
const Carousell = () => {
 return (
 <>
 <Container style={{marginTop:"40px"}}>
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1491336238524-c990bd671778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80"
      alt="First slide"
      height="650px"
    />
    <Carousel.Caption>
      <h3>A smart way to find and hire Helpers near you.</h3>
      <p>Easy, Quick, Reliable and Affordable</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_1192,w_2121,x_0,y_0/w_auto:100,w_1200,q_35,f_auto/v1/Talent%20Acquisition/iStock-621579258_yoqiiw.jpg"
      alt="Second slide"
      height="650px"
    />

    <Carousel.Caption>
      <h3>Domestic Helpers</h3>
      <p >Find multiple professionally verified ( Covid-19 safe) Blue-Collar Workers near you, connect with them directly and hire anyone you like, without the middlemen in between</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
</Container>
 </>
 );
 };
 export default Carousell;