import { Grid, styled } from '@mui/material'
import React from 'react'
import PrimaryButton from "../PrimaryButton"


const StyledSpan = styled('span')(
  {
    fontSize: "50px",
    color: "#c0c9f6",
  }
);

const StyledH1 = styled('h1')({
  fontSize : "120px",
  fontFamily: "sans-serif"

})

const Home = () => {
  return (
   <>
   <Grid container mt={5} mb={5}>
   <Grid item>
    <StyledSpan>I'm a</StyledSpan> <br />
   <StyledH1> Frontend Developer!</StyledH1>
   </Grid>
   <Grid item>
    <PrimaryButton>
      Previous Projects
    </PrimaryButton>
   </Grid>
   </Grid>
   </>
  )
}

export default Home;