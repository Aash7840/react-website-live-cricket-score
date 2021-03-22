import './App.css';
import {Button, Grid, Typography} from "@material-ui/core"
import Nav from './Navbar/Nav'
import Cart from './Component/Cart'
import { getmatches } from './Api/Api'
import { useEffect, useState, Fragment } from 'react';


function App() {

const [matches,setMatches]=useState([]);
  useEffect(() => {


    getmatches()
      .then((data) => {
        setMatches(data.matches)
        
      } )
      .catch((error) => alert("could not loading data"));

  }, []);
  

  return (
    <div className="App">
     
      <Nav />
      <Typography variant="h4" style={{marginTop:20}}>Welcome to My Live Score App</Typography>

       
      <Grid container>
        <Grid sm="2">
        </Grid> 
        <Grid sm="8">
        {
        matches.map((match)=>(
          <Fragment>
            {
              (match.type=="Twenty20" ?(
                <Cart key={match.unique_id} match={match} />
              ) : (""))
            }
          </Fragment>

        ))  }
      </Grid>

      </Grid>
    
   

    </div>
  );
}

export default App;
