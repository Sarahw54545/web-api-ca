import { useContext, useState } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from '../contexts/authContext';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const SignUpPage = () => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");

  const register = async () => {
    setError(""); // Clear old errors
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const validPassword = passwordRegEx.test(password);

    if (!userName) {
      setError("Username is Required.");
      return;
    }

    if (!validPassword) {
      setError(
        "Password must be at least 8 characters and include a letter, number, and symbol."
      );
      return;
    }

    if (password !== passwordAgain) {
      setError("Passwords do not match.");
      return;
    }

    if (validPassword && password === passwordAgain) {
      let result = await context.register(userName, password);

// Error Handling for Duplicate Usernames (If there isn't a 500 error i.e. The username is most likely taken, the user will be created in the database)
      if (result) {
        setRegistered(result);
      } else {
        setError("Username already exists or registration failed.");
      }
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          You must register a Username<br />and Password to log in
        </Typography>

        {/* Error Handling Alert Box */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
            onClick={register}
          >
            Register
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1976d2" }}>
            Log In
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpPage;