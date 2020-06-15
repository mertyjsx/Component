import React, { useState } from "react";
import { render } from "react-dom";
import firebase from "../firebase";
import {Button,Paper,Grid,Input,TextField} from "@material-ui/core"
import {Link} from "react-router-dom"
import down from "js-file-download"
import Nav from "./navbar"
import {firestore} from "../firebase";



const ReactFirebaseFileUpload = ({history}) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [file, setfile] = useState(null);
  const [fileurl,setfileurl]=useState("")
  const [des,setdes]=useState("")
console.log(fileurl)
console.log(url)






React.useEffect(() => {
  console.log("girdiiiiiiiiiiiiiiii")

console.log("file",fileurl)

  if(fileurl&&url){


let newdata={
filename:file.name,
img:url,
fileurl:fileurl,
compenentdes:des

}

  firestore.collection("Components").doc().set(newdata).then(()=>history.push("/components"))







 }
}, [fileurl,url])






const up=async ()=>{

   handleUpload().then(()=>handleUpload2())
 







}





  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleChange2 = e => {
    if (e.target.files[0]) {
      setfile(e.target.files[0]);
    }
  };




  const handleUpload =async () => {

let number =Math.floor(Math.random() * Math.floor(10000));

    const uploadTask =firebase.storage().ref(`images/${number}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        firebase.storage()
          .ref("images")
          .child(`${number}`)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  const handleUpload2 =async () => {

    let number =Math.floor(Math.random() * Math.floor(10000));
    
        const uploadTask = firebase.storage().ref(`file/${number}`).put(file);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress2(progress);
          },
          error => {
            console.log("hataaaaaaa")
            console.log(error);
          },
          () => {
            firebase.storage()
              .ref("file")
              .child(`${number}`)
              .getDownloadURL()
              .then(url => {
                console.log(url)
                setfileurl(url);
              }).catch(e=>console.log("hataaaaaa",e))
          }
        );
      };






  console.log("image: ", url);

const downl=()=>{
    down(url, 'filename.js')

}


  return (
<div>
<Nav></Nav>
<Grid container className="absolute">
<Grid item xs={8} className={"lefts"}></Grid>
<Grid item xs={4} className={"right"}></Grid>

   </Grid>


    <Grid style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
     
<Grid item style={{width:"80%" ,margin:40}}>

        <Paper elevation={3} style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",borderTopLeftRadius:100}}>
         
        
      <progress value={progress} max="100" style={{margin:20}} />
     
      <Button
 className="btna"
color="primary" 
      variant="contained"
      component="label"
      style={{margin:30}}
      >Select Image for Component Overview
  <input
    type="file"
    onChange={handleChange}

    style={{ display: "none" }}
  /></Button>
 
 <progress value={progress2} max="100" />
 <Button 
 className="btna"
    style={{margin:30}}
  color="primary" 
      variant="contained"
      component="label"
      
      >Select Component Folder
  <input
    type="file"
    onChange={handleChange2}

    style={{ display: "none" }}
  /></Button>

<TextField
style={{width:400,margin:20}}
value={des}
onChange={t=>setdes(t.target.value)}
          id="outlined-textarea"
          label="description"
          placeholder="Component Description (optional)"
          multiline
          variant="outlined"
        />


<div className="a">

  filename : {file?file.name:"null"}
</div>

<br />
     
     <Button  className="btna" disabled={image&&file?false:true} variant="contained" color="secondary" onClick={up}>Upload</Button>
     <br />




      
      </Paper>
      </Grid>
    </Grid>
    </div>
  );
};
export default ReactFirebaseFileUpload