import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import down from "js-file-download"

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%",
height:400
  
  },
  media: {
   
    height: 300,
  },
});

export default function MediaCard({url,img,des,name}) {
  const classes = useStyles();
console.log(name)
  

  return (
    
    <Card className={classes.root}>
   <a href={url}>
      <CardActionArea >
        
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
          
        />
        <CardContent>
         
          <Typography style={{height:20}} variant="body2" color="textSecondary" component="p">
           {des}
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
      <CardActions>
       
        <Button component={"a"} size="small" color="primary" href={url}>
          Download
        </Button>
       
      
      </CardActions>
     
    </Card>
  );
}