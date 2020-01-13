import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MuLink from "@material-ui/core/Link";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import AlertDialog from "../components/AlertDialog";
import Copyright from "../components/Copyright";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1528733918455-5a59687cedf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide() {
  const router = Router;
  const classes = useStyles();
  const [loginDetails, setLoginDetails] = useState({
    emailId: "",
    password: ""
  });
  const [alertToggle, setAlertToggle] = useState({
    state: false,
    message: " "
  });

  function handleClose() {
    setAlertToggle({ ...alertToggle, state: false, message: "" });
    console.log(alertToggle);
  }

  function handleChange(event) {
    console.log(event.target.name);
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      emailId: loginDetails.emailId,
      password: loginDetails.password
    };
    console.log(payload);
    const body = await loginReq("http://localhost:80/app/auth", payload);
    if (body.auth === true) {
      router.push("/dashboard");
    } else {
      setAlertToggle({
        state: true,
        message: body.errmsg
      });
    }
  }

  async function loginReq(url = "", payload) {
    // console.log(JSON.stringify(payload));
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify(payload)
    });
    var body = await response.json();
    console.log(body.auth);
    return body;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="emailId"
              label="Email Address"
              name="emailId"
              value={loginDetails.emailId}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              name="password"
              value={loginDetails.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Link href="/[title]" as={"home"}> */}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth="true"
              className={classes.submit}
              onClick={event => {
                console.log("clicked");
                {
                  handleSubmit(event);
                }
              }}
            >
              Sign In
            </Button>
            <AlertDialog
              open={alertToggle.state}
              message={alertToggle.message}
              closeAlert={handleClose}
            />
            {/* </Link> */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
