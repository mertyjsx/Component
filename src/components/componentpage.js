import React from 'react'
import Cards from "./card"
import { Card ,Grid} from '@material-ui/core';
import {firestore as db} from "../firebase"

import Zoom from 'react-reveal/Zoom';
import Nav from "./navbar"

export default function Componentpage() {


const [com,setcom]=React.useState([])

React.useEffect(() => {
    
    db.collection("Components")
    .get()
    .then(function(querySnapshot) {
let Array=[]

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            Array.push(doc.data());
        });

setcom(Array)

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });



},[] )
console.log(com)
    return (
        <Grid container  justify="center" >

<Nav></Nav>
<Grid container className="absolute">
<Grid item xs={8} className={"leftss"}></Grid>
<Grid item xs={4} className={"right"}></Grid>

   </Grid>

{com.map(item=>

<Grid item xs={6}  style={{padding:50}}>
<Zoom bottom style={{width:"100%"}}>
<Cards  url={item.fileurl} name={item.filename} img={item.img} des={item.compenentdes}></Cards>
</Zoom>
</Grid>)}

        </Grid>
    )
}
