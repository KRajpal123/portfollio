import { Grid, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PrimaryButton from "../PrimaryButton";

const style = {
  input: {
    width: "100%",
    height: "40px",
    margin: "10px 0",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    margin: "10px 0",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "5px",
  },
  submitButton: {
    width: "50%",
    height: "40px",
    margin: "10px 0",
    padding: "10px",
    boxSizing: "border-box",
    borderRadius: "5px",
    background: "linear-gradient(to left, #667eea, 0, #6b8dd6, #8e37d7)",
    color: "white",
    cursor: "pointer",
    border: "none",
    boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
  },
  flexItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};

const Contact = () => {
  return (
    <>
      <Grid container gap={2}>
        <Grid item xs={12} textAlign={"center"} textTransform={"uppercase"}>
          <Typography variant="h3"> Contact</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Drop Me a Message </Typography>
          <p style={{ wordWrap: "break-word" }}>
            Please feel free to reach out to us with any questions or concerns.
            We'll get back to you as soon as possible.
          </p>
          <Grid container>
            <Grid item xs={6}>
              <div style={style.flexItems}>
                <PrimaryButton>{<LocalPhoneIcon />}</PrimaryButton>
                <Typography variant="h6"> +91 9618100383</Typography>
              </div>
              <div style={style.flexItems}>
                <PrimaryButton>{<MailOutlineIcon />}</PrimaryButton>
                <Typography variant="h6">
                  {" "}
                  rajpalreddyk@gmail.com
                </Typography>
              </div>
              <div style={style.flexItems}>
                <PrimaryButton>{<LocationOnIcon />}</PrimaryButton>
                <Typography variant="h6">Hyderabad, Ts</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              background:
                "linear-gradient(to right, #667eea, 0, #6b8dd6, #8e37d7)",
              color: "white",
              height: "fit-content",
              borderRadius: "10px",
              padding: "30px 10px",
            }}
          >
            <div style={{ width: "90%", margin: "auto" }}>
              <form>
                <input type="text" placeholder="Name" style={style.input} />{" "}
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  style={style.input}
                />{" "}
                <br />
                <textarea
                  name="msg"
                  id="msg"
                  style={style.textarea}
                  placeholder="Message"
                  cols="30"
                  rows="10"
                ></textarea>
                <input
                  type="submit"
                  placeholder="Send"
                  style={style.submitButton}
                />
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
