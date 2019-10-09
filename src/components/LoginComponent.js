import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  FormControl
} from "@material-ui/core";

class Login extends Component {
  render() {
    return (
      <Container maxWidth="xs" className="login-main-container">
        <Container className="login-header">
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Welcome to the SPAFF App
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Created by Vivian Lu
          </Typography>
        </Container>
        <Card className="login-card">
          <CardContent>
            <FormControl>
              <TextField
                label="Username"
                margin="normal"
                name="username"
                id="username"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Password"
                margin="normal"
                name="password"
                id="password"
                variant="outlined"
                fullWidth
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="contained" color="primary" size="large">
              LOG IN
            </Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

export default Login;
