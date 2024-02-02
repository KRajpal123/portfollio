import { Container, Grid } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar/Navbar";


const navItems = [
{
  id : 1,
  name : "Home",
  page : "/home" 
},
{
  id : 2,
  name : "About Me",
  page : "/about" 
},
{
  id : 3,
  name : "Portfolio",
  page : "/portfolio" 
},
{
  id : 4,
  name : "Services",
  page : "/Experience" 
},
{
  id : 5,
  name : "Contact",
  page : "/contact" 
},
]
const App = () => {
  return (
   <Container maxWidth="lg">
    <Grid container item marginTop={4}>
      <Navbar navItems={navItems} />
    </Grid>
   </Container>
  );
};

export default App;
