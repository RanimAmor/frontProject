import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'
import { useState } from 'react';
import OfferList from './components/OfferList';
import Offer from './components/Offer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch
 } from "react-router-dom";
import AboutUs from './components/AboutUs';

function App() {

  return (
    <Router>
      <Navigation></Navigation>
    <Routes>
    <Route path="/" caseSensitive={false} element={<Home />} />
    <Route  path='/OfferList/:id' element={<OfferList/>  }/>
    <Route  path='/Offer/:id' element={<Offer/>  }/>
    <Route path="/AboutUs" caseSensitive={false} element={<AboutUs />} />

      <Route path="/login" caseSensitive={false} element={<Login />} />
      <Route path="/register" caseSensitive={false} element={<Register />} />
    </Routes>
  </Router>
  )
}

export default App;