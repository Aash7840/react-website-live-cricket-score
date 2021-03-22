import { Card, CardContent, Typography, CardActions, Button, Grid, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from "@material-ui/core";
import { getMatchDetail } from "../Api/Api";
import { useState, Fragment } from "react";


const Cart = ({match}) => {

                   const [detail, setDetail]=useState({});
                   const [open, setOpen]=useState(false);

const handleClick=(id)=>{
  getMatchDetail(id)
  .then((data)=>{
    setDetail(data);
    console.log("Match DATA:", data)})
  .catch((error)=> console.log(error));
  handleOpen();
                           
};


  const getMatchCart = () => {

    return (
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          < Grid container justify="center" alignItems={"center"} spacing={4}>
            <Grid item >
              <Typography variant="h5">{match ["team-1"]}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 100 }}
                src="./img/a.png" alt="nope" />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match ["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions >
          <Grid container justify="center"  >
            <Button onClick={()=>
            {
              handleClick(match.unique_id)
            }} 
            
            variant="contained" color="primary">Show Details
            </Button>

            <Button style={{ marginLeft: 5 }} variant="contained" color="primary">
             Start Time {new Date(match.dateTimeGMT).toLocaleString()}
             </Button>
          </Grid>
        </CardActions>
      </Card>
    )
  };

     const handleClose=()=>{
       setOpen(false);

     };
     const handleOpen=()=>{
       setOpen(true);

     };


      const getDialog=()=>
        (<Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
      <Typography>{detail.stat}</Typography>
      <Typography>
        Match
        <span style={{fontStyle:"italic", fontWeight:"bold"}}>
          {detail.matchStarted ? "Started" : "Still not started"} {" "}
        </span>

      </Typography>
      <Typography>
        Score
        <span style={{fontStyle:"italic", fontWeight:"bold"}}>
   
          {detail.score}
        </span>

      </Typography>


              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus> 
                Close
              </Button>
            </DialogActions>

        </Dialog>
         );

  return <Fragment>
   {getMatchCart()}
   {getDialog()}
  </Fragment>
};
export default Cart;