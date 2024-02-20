import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/About/AboutMe";
import Experience from "./components/experience/Experience";
import ScrollToTop from "react-scroll-to-top";

const navItems = [
  {
    id: 1,
    name: "Home",
    page: "home",
    component: <Home />,
  },
  {
    id: 2,
    name: "About Me",
    page: "about",
    component: <AboutMe />,
  },
  {
    id: 3,
    name: "Portfolio",
    page: "portfolio",
    component: <Portfolio />,
  },
  {
    id: 4,
    name: "Services",
    page: "services",
    component: <Services />,
  },
  {
    id: 5,
    name: "Experience",
    page: "experience",
    component: <Experience />,
  },
  {
    id: 6,
    name: "Contact",
    page: "contact",
    component: <Contact />,
  },
];

const App = () => {
  return (
    <Container maxWidth="lg">
      <Grid container item marginTop={4}>
        <Navbar navItems={navItems} />
      </Grid>
      <Grid container>
        {navItems.map((val) => {
          return (
            <Grid item key={val.id} xs={12} mt={5} mb={5}>
              {val.component}
            </Grid>
          );
        })}
      </Grid>
      <Grid container>
        <Grid item>
          <ScrollToTop
            smooth
            color="white"
            style={{
              background:
                "linear-gradient(to right, #667eea, 0, #6b8dd6, #8e37d7)",
              borderRadius: "50%",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
