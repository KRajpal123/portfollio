import { Grid } from "@mui/material";
import React from "react";
import "./about.css"
import RajpalReddy from "../../image/RajpalReddy.png"
import PrimaryButton from "../PrimaryButton"
import SecondaryButton from "../SecondaryButton"


const imageStyle = {
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
};

const styleDiv = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  gap: "20px"
}
const AboutMe = () => {
  return (
    <>
      <Grid container mt={5} mb={5} gap={3}>
        <Grid item xs={12} md={4}>
          <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "60vh" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={RajpalReddy} alt="rajpal's" style={imageStyle} />
              </div>
              <div style={styleDiv}>
                <PrimaryButton>Hire Me</PrimaryButton>
                <SecondaryButton>Resume</SecondaryButton>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <h1>👋 Hello there!</h1>
          <p>
            {" "}
            <b>I'm Rajpal Reddy,</b> a frontend developer with a passion for
            creating awesome websites.
          </p>
          <h3> 💻 What I Do:</h3>
          <p>
            {" "}
            I bring websites to life! As a frontend developer, my job is to make
            sure that the websites you see not only look great but also work
            seamlessly. I focus on the user interface—the part you interact
            with—making it user-friendly and visually appealing.
          </p>
          <h3> 🛠️ My Toolbox:</h3>
          <p>
            {" "}
            <strong>HTML:</strong> Think of it as the backbone of a webpage.
          </p>
          <p>
            {" "}
            <b>CSS:</b> The magic that adds style and makes things look pretty.
          </p>
          <p> <b>JavaScript:</b> My secret weapon for creating dynamic and interactive web
            pages. </p>

          <h3>🌐 Responsive Design:</h3>
          <p> Ever seen a website that looks good on
            both your computer and your phone? That's what I do! I ensure that the
            websites I create adapt to different screen sizes, providing a smooth
            experience for everyone.</p>
          <h3>⚡ What Sets Me Apart:</h3>
          <p>I pay attention to the
            details. From the color scheme to the layout, every element matters. I
            believe in creating websites that not only function flawlessly but
            also leave a lasting impression.</p>
          <h3>🚀 Let's Work Together:</h3>
          <p>  Whether you
            need a brand new website or want to enhance an existing one, I'm here
            to help. Let's collaborate and bring your digital vision to life!</p>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
