import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

const Style = {
  boxShadow:
    "0 19px 38px rgba(102, 126, 234, 0.30), 0 15px 12px rgba(102, 126, 234, 0.22)",
  border: "10px solid #667eea",
  height: "300px",
  borderRadius: "10px",
};

const Services = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "uppercase",
          }}
          xs={12}
        >
          <Typography variant="h3">Services</Typography>
        </Grid>
        <Grid item xs={5}>
          <Box sx={Style}>
            <div style={{ width: "90%", height: "100%", marginTop: "10px" }}>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "auto",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    position: "relative",
                  }}
                >
                  <DesktopWindowsOutlinedIcon
                    sx={{
                      color: "blue",
                      fontSize: "50px",
                      position: "absolute",
                      top: "14px",
                      marginLeft: "14px",
                    }}
                  />
                </div>
                <div>
                  <Typography variant="h4">
                    DESKTOP APP <br /> DEVELOPMENT
                  </Typography>
                </div>
              </div>
              <p
                style={{ wordWrap: "break-word", width: "90%", margin: "auto",marginTop:"20px" }}
              >
                Get a custom desktop app that fits your business perfectly. It
                works on all systems and keeps your data safe. As your business
                grows, the app grows with you. We make it easy to connect with
                other tools. Affordable,
                user-friendly.
              </p>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
