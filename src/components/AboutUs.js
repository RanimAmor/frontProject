import Footer from "./Footer";
import OfferList from "./OfferList";
import { Col,Container,Row} from "react-bootstrap";
import "./general.css"

const AboutUs =() =>{

    return (
<>
<Container style={{textAlign:"center"}}>
<br></br><br></br>

<h2>About Us</h2>
<br></br>
     <p>
     Close enables  underprivileged and unorganized blue-collar workforce in finding local employment, free of cost, directly from nearby employers, and without the middlemen in between.

In turn, the platform makes it easy, quick, reliable & affordable for millions of employers to find & hire nearby blue-collar workers, again without the middlemen in between.

With a larger vision to end poverty, forced labour, worker's exploitation, and human trafficking, Helpers Near Me is working towards creating an ecosystem of inclusive economic growth for Tunisia's underprivileged unorganised blue-collar workforce.

The platform uses technologies  as a medium to establish a direct Employer-Worker connect.

Close also works closely with Government bodies and NGOs to help connect the blue-collar workforce with nearby employers.

The platform helps in establishing Employer-Worker connections in a fairly organised way. At a local level, it allows both men & women workers to connect directly with the nearby Employers.

In the long run, having enough local employment opportunities allows workers to find a better working environment and better salaries for themselves and an opportunity to improve their quality of life.
    </p> 
    <br></br>
    <h2>Why Us</h2>
    <br></br>
    <div className="center" >
<Row >
   
    <Col><img width="50px"src="https://helpersnearme.com/images/icons/responsive.svg"></img></Col>
    <Col><h6>Convenient, Easy And Organized</h6></Col>
   
</Row>
</div>
<br></br>

<div className="center" >
<Row >
   
    <Col><img width="50px"src="https://helpersnearme.com/images/icons/shield2.svg"></img></Col>
    <Col><h6>Professionally Verified Workers </h6></Col>
   
</Row>
</div>
<br></br>

<div className="center" >
<Row >
   
    <Col><img width="50px"src="https://helpersnearme.com/images/icons/destination.svg"></img></Col>
    <Col><h6>Connect with nearby Workers</h6></Col>
   
</Row>
</div>
<br></br>

<div className="center" >
<Row >
   
    <Col><img width="50px"src="https://cdn-icons.flaticon.com/png/512/2190/premium/2190527.png?token=exp=1640478245~hmac=0617f5f75d5eb4e904c6dfe8da365847"></img></Col>
    <Col><h6>No middlemen  in between</h6></Col>
   
</Row>
</div>
    </Container>
    <br></br>

        <Footer></Footer>
</>
    )
}
export default AboutUs;