import React from 'react'
import {Grid,Button} from "@material-ui/core"
import {Link} from "react-router-dom"
const Navbar=({history})=> {
    return (
        <Grid container className="navbarc" direction="row">
<Grid item  xs={3}  className="navbarR"></Grid>
<Grid container xs={4} className="navbarR" >

<Grid item  className="navbarRi1 a" ><Link to="/components">Components</Link></Grid>
<Grid item  className="navbarRi2" ><Button component={Link} to="/upload" variant="contained"   style={{backgroundColor:"#DC3545",color:"white",height:56,width:130}}>
    
    
    <div className="a">Upload</div></Button></Grid>
</Grid>

        </Grid>
    )
}
export default Navbar