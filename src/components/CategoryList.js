import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { Card,Button} from "react-bootstrap";
import { Col,Container,Row} from "react-bootstrap";


const CategoryList= () => {

        const [Categorylist,setCategorylist]=useState(
     
             []
         );
     
      React.useEffect(() => {
         axios.get('http://localhost:5000/categories/get').then((response) => {
           setCategorylist(response.data.response)
             localStorage.setItem('CategoryList',JSON.stringify(response.data.response))
         });
     
       }, []);

    
    return (
<div>


<Container>
    <br></br>
    <h1 style={{textAlign:'center'}}>Find & Hire</h1>
    <br></br>

    <Row>
    { Categorylist.map(e => 
 <Col >
<Link to={`/OfferList/${e._id}`}style={{color:"black", textDecoration:"none"}}>
   <Card className="cardd" style={{ width: '12rem',height:'220px' }}>
        <Card.Img variant="top" src={e.image} rounded style={{height:'120px'}}/>
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text> {e.description}</Card.Text>
        </Card.Body>
    </Card>
    </Link>
    <br></br>
</Col>
)}
</Row>
</Container>

</div>
    )

}
 export default CategoryList;