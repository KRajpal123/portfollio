import { Container, Grid } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/About/AboutMe";
import Experience from "./components/experience/Experience";

const navItems = [
  {
    id: 1,
    name: "Home",
    page: "/home",
    component: <Home />,
  },
  {
    id: 2,
    name: "About Me",
    page: "/about",
    component: <AboutMe />,
  },
  {
    id: 3,
    name: "Portfolio",
    page: "/portfolio",
    component: <Portfolio />,
  },
  {
    id: 4,
    name: "Services",
    page: "/services",
    component: <Services />,
  },
  {
    id: 5,
    name: "Experience",
    page: "/experience",
    component: <Experience />,
  },
  {
    id: 6,
    name: "Contact",
    page: "/contact",
    component: <Contact />,
  },
];


const App = () => {
  return (
    <Container maxWidth="lg">
      <Grid container item marginTop={4}>
        <Navbar navItems={navItems} />
      </Grid>

      <Grid container item mt={4}>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          {navItems.map((item) => {
            return <Route path={item.page} element={item.component}  key={item.id} />;
          })}
        </Routes>
      </Grid>
    </Container>
  );
};

export default App;
