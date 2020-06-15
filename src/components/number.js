import React from "react"
import { Grid, Divider,Button ,Typography} from "@material-ui/core"
import { Spring } from 'react-spring/renderprops'
import { BsUpload } from "react-icons/bs"
import Zoom from 'react-reveal/Zoom';
import {Link} from "react-router-dom"
import { FaUsers, FaDownload, FaHeart } from "react-icons/fa"
const N = () => {


    return (

        <Grid container style={{ width: "100%", height: 500, zIndex: 200, marginTop: 300 }} >
            <Grid style={{ height: 200, width: "100%" }} justify="center" align="center">
            <Zoom bottom>
                <h1 style={{ color: "#352961", fontSize: 90, textAlign: "center" }}>You can contribute</h1>
                </Zoom>


                <Divider />
            </Grid>


            <Grid container direction="row">
                <Grid container xs={6} alignItems="center" justify="center">
                <Zoom bottom>
                    <BsUpload size={60} style={{ marginRight: 20 }}></BsUpload>
                    </Zoom>
                    <Zoom bottom>
                    <Spring
                        from={{ number: 1 }}
                        to={{ number: 50 }}>
                        {props => <h1 style={{ color: "black", fontSize: 90 }}>{Math.floor(props.number)}</h1>}
                    </Spring>
                    </Zoom>
                </Grid>

                <Grid container xs={6} alignItems="center" justify="center">
                <Zoom bottom>
                    <FaUsers size={60} style={{ marginRight: 20 }}></FaUsers>
                    </Zoom>
                    <Zoom bottom>
                    <Spring
                        from={{ number: 1 }}
                        to={{ number: 20 }}>
                        {props => <h1 style={{ color: "black", fontSize: 90 }}>{Math.floor(props.number)}</h1>}
                    </Spring>
                    </Zoom>
                </Grid>

                <Grid container xs={6} alignItems="center" justify="center">
                <Zoom bottom>
                    <FaDownload size={60} style={{ marginRight: 20 }}></FaDownload>
                    </Zoom><Zoom bottom>
                    <Spring
                        from={{ number: 1 }}
                        to={{ number: 30 }}>
                        {props => <h1 style={{ color: "black", fontSize: 90 }}>{Math.floor(props.number)}</h1>}
                    </Spring>
                    </Zoom>
                </Grid>

                <Grid container xs={6} alignItems="center" justify="center">
                <Zoom bottom>
                    <FaHeart size={60} style={{ marginRight: 20 }}></FaHeart>
                    </Zoom> <Zoom bottom>
                    <Spring
                        from={{ number: 1 }}
                        to={{ number: 10 }}>
                        {props => <h1 style={{ color: "black", fontSize: 90 }}>{Math.floor(props.number)}</h1>}
                    </Spring>
                    </Zoom>
                </Grid>


            </Grid>

<Grid justify="center" style={{width:"100%",display:"flex",justifyContent:"center",}}>
            <Divider style={{margin:20}}/>
            <Button variant="outlined" className="btn2" component={Link} to="upload">


          <div className="ab" style={{color:"#352961"}}>Upload</div>
 
</Button>


</Grid>
<div style={{width:"100%",marginTop:200,display:"flex",alignItems:"center",justifyContent:"center"}}>
<a href="https://colorlib.com/wp/templates/" style={{textAlign:"center"}} variant="body2" color="textSecondary" align="center" className="a">
      {'Copyright © '}
     
        Colorlib  and Bmsoftware
     
     
      {'.'}
    </a>


</div>
        </Grid>



    )
}

export default N