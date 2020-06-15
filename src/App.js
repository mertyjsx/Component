import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid,Button} from "@material-ui/core"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import react from "./assets/react.png"
import Navbar from "./components/navbar"
import g from "./assets/graphql.png"
import Homea from "./components/homea"
import N from "./components/number"
import Up from "./components/upload"
function App() {

 

  return (
<div>
<Navbar></Navbar>
 <Homea></Homea>
<N></N>

   </div>
  );
}

export default App;
