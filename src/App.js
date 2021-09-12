import React from "react";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

const useStyles = makeStyles(() => ({
  appbar: {
    height: "90px",
    backgroundColor: "rgb(251, 255, 253)",
    color: "black",
  },
  avatar: {
    width: "120px",
    height: "120px",
    margin: "28px 0px 13px 0",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar>
          <div>
            <span>
              <div className="blue-square"></div>
              <div className="name">Pierre Plantié</div>
            </span>
            <div className="software">SOFTWARE ENGINEER</div>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container className="layout-container">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="content-container"
          >
            <Paper className="paper-left" xs={12} md={6} elevation={2}>
              <Avatar
                alt="Pierre Plantié"
                src="/pierre-plantie.jpg"
                className={classes.avatar}
              />
              <h1>
                Pierre
                <br /> Plantié
              </h1>
              <hr />
              <span className="buttons-container">
                <Button variant="contained" elevation={0}>
                  Resume
                </Button>
                {"   "}
                <Button variant="outlined" elevation={0}>
                  Download
                </Button>
              </span>
              <div className="socials">
                <a
                  href="https://github.com/pierrepln"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pierrepln/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/pierre_plnt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Paper>
            <Paper className="paper-right" xs={12} md={6} elevation={0}>
              <p className="text-title">Hello</p>
              <p className="text-heading">My name is Pierre</p>
              <p className="text-block">
                I am a software engineer and an enthusiastic problem solver.
                Currently favoring React, I also build stuff with Vue.js
              </p>
            </Paper>
          </Grid>
        </Grid>
      </main>
      <footer><small>&copy; Copyright 2021, by Pierre Plantié</small></footer>
    </div>
  );
};

export default App;
