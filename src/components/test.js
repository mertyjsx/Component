import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from "@material-ui/core"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {

 

  return (
    <div className="App" style={{width:"100%",height:400,backgroundColor:"#352961"}}>
  
  
  
  
  
  
  
  <div style={{marginLeft:200}}>

  <Carousel
  centerMode={true}
  className={"sss"}
  
  autoPlay={true}
  infiniteLoop={true}
 transitionTime={1000}
  showArrows={false}
  showThumbs={false}
  showStatus={false}
dynamicHeight={true}
  width={300}
  showIndicators={false}
  >
                <div >
                  <h1 style={{color:"white"}}>Legend legenasd qwlkd</h1>
                   
                </div>
                <div style={{width:300,height:500,backgroundColor:"#352961"}}>
                  
                <h1 style={{color:"white"}}>Legend</h1>
                </div>
                <div style={{width:300,height:500,backgroundColor:"#352961"}}>
                <h1 style={{color:"white"}}>Legend</h1>
                </div>
            </Carousel>


  </div>
    </div>
  );
}

export default App;
