import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const projectDetails = [
  {
    id: 1,
    Name: "Blog Website",
    Technology: ["REACT", "MUI"],
    Desc: `Discover a world of captivating stories on our blog – where simplicity meets intrigue. 
    Unwind with concise, easy-to-read content that sparks curiosity. 
    Your go-to source for a delightful escape into the power of words. Explore, enjoy, 
    and embrace the beauty of simplicity in every post.`,
  },
  {
    id: 2,
    Name: "E-commerce Website",
    Technology: ["HTML", "CSS", "JS"],
    Desc: `
    Shop smart, shop easy! Explore our E-commerce haven for unbeatable deals, quality products
    , and seamless shopping. Elevate your online shopping experience with us. 
    Your one-stop destination for style, savings, and satisfaction. Start clicking, start smiling!
    `,
  },
  {
    id: 3,
    Name: "Grocery Website",
    Technology: ["HTML", "CSS"],
    Desc: `
    Grocery shopping made effortless! Dive into a world of fresh choices and unbeatable deals.
     From pantry staples to gourmet delights, find it all at your fingertips.
      Simplify your shopping with us – where quality meets convenience. 
    Fresh, fast, and fuss-free grocery experiences await you. Start browsing, start savoring
    `,
  },
  {
    id: 4,
    Name: "Blog Website",
    Technology: ["REACT", "Tailwind css"],
    Desc: `
    Master your day with our sleek todo app! Effortlessly organize tasks, 
    set priorities, and conquer your to-dos. Your go-to companion for productivity, simplicity, and success. 
    Elevate your daily routine – start ticking off tasks with ease.
     Your streamlined path to a more accomplished you begins here. Download now, organize instantly!
    `,
  },
];

const styleBorder = {
  border: "10px solid #cfcfcf",
  height: "300px"

}

const Portfolio = () => {
  const [swap, setSwap] = useState()
  return (
    <>
      <Grid container mt={5} mb={5}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          <Typography variant="h3">Portfolio</Typography>
        </Grid>
        <Grid container gap={5} mt={5}>
          {
            projectDetails.map((project, i) => {
              const isSwapped = i % 2 === 1 ? !swap : swap;
              return (
                <>
                  <Grid item xs={5}>
                    <h2>Project {project.id}</h2>
                    <h1>{project.Name}</h1>
                    <p>{project.Desc}</p>
                    <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
                      <ArrowRightAltIcon />
                      <span>Read more</span>
                    </div>
                  </Grid>
                  <Grid item xs={5}>
                    <div style={styleBorder}>
                      <div>
                        <img src={project?.url} alt="imageUrl" />
                      </div>
                    </div>

                  </Grid>
                </>
              )
            })
          }
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
