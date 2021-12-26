import { useState} from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { generatePath } from 'react-router';
import React from 'react';
import { Card,Row,Col, Container,Form} from "react-bootstrap";
import "./general.css"
import Footer from "./Footer";
const OfferList =  () => {
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
  const [category,setCategory]=useState("");
  React.useEffect(() => {
  
    axios.get("http://localhost:5000/categories/getById/"+id).then((response) => {
      setCategory(response.data.response)
    });

  });
  const [search,setSearch]=useState("");



  return (
   
<>
  <Container>
           <div style={{textAlign:'center'}}>
           <br></br>

           <h1>{category.name}</h1>
           <br></br>

           <img width="180px"src={category.image}></img>
  
   <Form.Group className="mb-3" controlId="formGridAddress1">
   <br></br>

   <Row>
     <Col xs lg="2">
    <Form.Label style={{fontWeight:"bold"}}>Search</Form.Label>
    </Col>
    <Col xs lg="10">
    <Form.Select  defaultValue="All" onChange={(event)=>{setSearch(event.target.value)}} >
    <option>All</option>
    <option>Ariana</option>
    <option>Beja</option>
    <option>Ben Arous</option>
    <option>Bizerte</option>
    <option>Gabes</option>
    <option>Gafsa</option>
    <option>Jendouba</option>
    <option>Kairouan</option>
    <option>Kasserine</option>
    <option>Kebili</option>
    <option>Kef</option>
    <option>Mahdia</option>
    <option>Manouba</option>
    <option>Medenine</option>
    <option>Monastir</option>
    <option>Nabeul</option>
    <option>Sfax</option>
    <option>Sidi Bouzid</option>
    <option>Siliana</option>
    <option>Sousse</option>
    <option>Tataouine</option>
    <option>Tozeur</option>
    <option>Tunis</option>
    <option>Zaghouan</option>

    </Form.Select>
    </Col>
    </Row>
    </Form.Group>
    
           </div>
           <br></br>

   <Row>
     
     { Offerlist.filter(e=>{if (search===""||search==="All"){
       return (e)
     }else if (e.location===search){
       return(e)
     }}).map(e =>{  
      return(  
      <Col>
      <Link to={`/Offer/${e._id}`}style={{color:"black", textDecoration:"none"}}>
        <Card className="cardd" border="dark" style={{ width: '18rem' }}>
          <Card.Header>{e.title}</Card.Header>
          <Card.Body>
             <Card.Title>{e.contactInfo}</Card.Title>
             <Card.Text>
                {e.price}<br></br>
                {e.location}
             </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      </Col>
    );
  })}
  </Row> 
   <br></br>
   <br></br>

 </Container>
 <Footer></Footer>

 </>
 );
}

export default OfferList;