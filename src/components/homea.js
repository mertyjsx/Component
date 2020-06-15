import React from 'react';


import {Grid,Button} from "@material-ui/core"
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import react from "../assets/react.png"
import Navbar from "./navbar"
import {Link} from "react-router-dom"
import g from "../assets/graphql.png"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import im1 from "../assets/im6.png"
import im2 from "../assets/im2.png"
import im3 from "../assets/im3.png"
import im4 from "../assets/im4.png"

//import 'pure-react-carousel/dist/react-carousel.es.css';

function App() {

const [item1,setitem2]=[
  <div style={{padding:60}} className="START">

  <h1>DOWNLOAD COMPONENT YOU LİKE</h1>
  
                     <p>you can use this application as a component archive to speed up the development process</p>
          
                    <Button component={Link} to="components" variant="outlined" className="btn">
            <div className="ab"> See Widgets</div>
   
  </Button>
  </div> ,

<div style={{padding:60}} className="START">

<h1>DONT WASTE YOUR TİME</h1>

                   <p>you can download components that others have already created</p>
        
                   <Button component={Link} to="components" variant="outlined" className="btn">
          <div className="ab"> See Widgets</div>
 
</Button>
</div>  ,
   <div style={{padding:60}} className="START">

   <h1>USE IT LİKE OWN ARCHİVE</h1>
   
                      <p>you can use this application as a component archive to speed up the development process</p>
           
                      <Button component={Link} to="components" variant="outlined" className="btn">
             <div className="ab"> See Widgets</div>
    
   </Button>
   </div>     



]



  return (
<div>

   <Grid container className="absolute">
<Grid item xs={8} className={"left"}></Grid>
<Grid item xs={4} className={"right"}></Grid>

   </Grid>

   <Grid container alignItems="center" className="container" justify="center">
<Grid item xs={4} className={"item"}>

<AliceCarousel
      
         autoPlay={true}
         stopAutoPlayOnHover={false}
        mouseTrackingEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={false}
        autoPlayInterval={4000}
        autoPlayDirection="rtl"
        autoPlay={true}
       buttonsDisabled={true}
       dotsDisabled={true}
      duration={400}
      >


<div style={{padding:60}} className="START">

<h1>DOWNLOAD COMPONENT YOU LİKE</h1>

                   <p>you can use this application as a component archive to speed up the development process</p>
        
                  <Button component={Link} to="components" variant="outlined" className="btn">
          <div className="ab"> See Widgets</div>
 
</Button>
</div> 

<div style={{padding:60}} className="START">

<h1>DONT WASTE YOUR TİME</h1>

                 <p>you can download components that others have already created</p>
      
                 <Button component={Link} to="components" variant="outlined" className="btn">
        <div className="ab"> See Widgets</div>

</Button>
</div>  
 <div style={{padding:60}} className="START">

 <h1>USE IT LİKE OWN ARCHİVE</h1>
 
                    <p>you can use this application as a component archive to speed up the development process</p>
         
                    <Button component={Link} to="components" variant="outlined" className="btn">
           <div className="ab"> See Widgets</div>
  
 </Button>
 </div>     




      </AliceCarousel>















</Grid>
<Grid item xs={4} className={"itemr sss"}>




<AliceCarousel
  
         autoPlay={true}
       stopAutoPlayOnHover={false}
        mouseTrackingEnabled={false}
        playButtonEnabled={false}
        disableAutoPlayOnAction={false}
        autoPlayInterval={4000}
        autoPlayDirection="rtl"
        autoPlay={true}
       buttonsDisabled={true}
       dotsDisabled={true}
      duration={400}
      >

  
<img src={im1}  className="imgr"></img>
  
<img  src={im2} className="imgr"></img>
<img  src={im3} className="imgr"></img>
<img  src={im4} className="imgr"></img>
</AliceCarousel>



</Grid>





   </Grid>



   </div>
  );
}

export default App;
