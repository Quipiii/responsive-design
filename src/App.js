import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container spacing={4} id='container'> 
      <Grid item xs={6} md={4}>
        <div className='item'>

        </div>
      </Grid>
      <Grid item xs={6} md={8}>
        <div className='item'>

        </div>
      </Grid>
      <Grid item xs={8} md={3}>
        <div className='item'>

        </div>
      </Grid>
      <Grid item xs={4} md={9}>
        <div className='item'>

        </div>
      </Grid>
    </Grid>
  );
}

export default App;
