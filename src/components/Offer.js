import { useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import React from 'react';
import { Card,Row,Col, Container,Form,Button} from "react-bootstrap";
import "./general.css"
import Footer from "./Footer";
const Offer =  () => {
    const {id}= useParams();

    const [Offerlist,setOfferlist]=useState(
     
        []
    );

    React.useEffect(() => {
    axios.get("http://localhost:5000/offers/get/"+id).then((response) => {
      setOfferlist(response.data.response)
       localStorage.setItem('Offerlist',JSON.stringify(response.data.response))
    });

  }, []);
  const [offer,setOffer]=useState("");
  React.useEffect(() => {
  
    axios.get("http://localhost:5000/offers/getById/"+id).then((response) => {
      setOffer(response.data.response)
    });

  });
  const [search,setSearch]=useState("");



  return (
   
<>
<Container>
    <br></br>
    <br></br>
    <br></br>

    <Row>
        <div style={{ textAlign:"center"}}>
        <img width="150px" src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102633.png?token=exp=1640472270~hmac=5f7fa0c7732ebee2ac4e5fce9402ab5d"></img>
    
           </div>
           
    </Row>
    <br></br>

    <Row style={{ flex:"display",justifyContent:"center"}}>
    <div className="center" >
    <Card  style={{ width: '50rem'}}className="text-center">
  <Card.Header style={{fontWeight:"bold"}}>{offer.title}</Card.Header>
  <Card.Body>
    <Card.Text><span style={{fontWeight:"bold"}}>Price:  </span><span>{offer.price}</span></Card.Text>
    <Card.Text>
    <span style={{fontWeight:"bold"}}>Phone:  </span><span>{offer.contactInfo}</span>
    </Card.Text>
    <Card.Text><span style={{fontWeight:"bold"}}>Location:  </span><span>{offer.location}</span>
    </Card.Text>
    <Button variant="dark">Add Review</Button>
  </Card.Body>
</Card>
</div>
</Row>
 </Container>
 <Footer></Footer>
 </>
 );
}

export default Offer;