import React, { useState } from 'react';
import '../assests/App.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { ReactComponent as Svg } from '../assests/svg/logo2.svg';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  svg: {
    position: 'relative',
    minHeight: 300,
    minWidth: 300,
    maxWidth: '30%',
    maxHeight: '30%',
    marginTop: 80,
    marginLeft: 80
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const regionList = ["Ariana", "Béja", "Ben Arous", "Bizerte", "Gabès", "Gafsa", "Jendouba", "Kairouan", "Kasserine", "Kébili", "Kef", "Mahdia", "Manouba", "Médenine", "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", "Siliana", "Sousse", "Tataouine", "Tozeur", "Tunis", "Zaghouan"];
export default function Register() {

  const classes = useStyles();
  const BASE_URL_HTTP = process.env.REACT_APP_BASE_URL_HTPP;
  const [username, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [location, setLocation] = useState('');
  const [birthday, setbirthday] = useState('')
  const [gender, setgender] = useState('')


  function signUp() {

    axios.post(BASE_URL_HTTP + '/user/register', {
      user_name: username,
      email: email,
      birthday,
      gender,
      location,
      password: password,
    })
      .then((response) => {
        if (response.status === 201) {
          alert("User created!")
          window.location.replace('/login')
        }
        else {
          alert("Invalid Credentials")
        }
      }, (error) => {
        if (error.response) {

          alert("Invalid Credentials")

        } else if (error.request) {

          alert("Invalid Credentials")

        } else if (error.message) {

          alert("Invalid Credentials")

        }
      });

  }
  return (
    <div style={{ display: 'flex' }} >
      {window.innerWidth > 700 && <Svg className={classes.svg} />}
      <div component="main" className='container'>
        <CssBaseline />
        <div className={classes.paper}>
          {window.innerWidth < 700 && <Svg style={{ maxHeight: '40vh', maxWidth: '40vw' }} />}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Uname"
                  name="userName"
                  variant="outlined"
                  required
                  fullWidth
                  id="UserName"
                  label="User Name"
                  autoFocus
                  onChange={event => setUname(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={event => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={event => setPass(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="birthday"
                  label="birthday"
                  type='date'
                  id="birthday"
                  autoComplete="current-birthday"
                  onChange={event => setbirthday(event.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <div >
                  <TextField required fullWidth select label="select Location"
                    name="location" value={location} onChange={(event) => setLocation(event.target.value)} >
                    <option value="">Sélectionnez votre région</option>
                    {regionList.map((region, index) => (
                      <option key={index} value={region}>{region}</option>
                    ))}
                  </TextField>

                </div>
              </Grid>
              <Grid item xs={12}>
                <div >
                  <TextField required fullWidth name="gender" select
                    label="select Gender"
                    value={gender} onChange={(event) => setgender(event.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </TextField>

                </div>

                <Grid item xs={12}>
                  <span>password must contain minimum 8 characters, one number and one special character</span>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => signUp()}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
}