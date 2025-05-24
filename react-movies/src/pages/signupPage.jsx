import { Link } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const SignUpPage = () => {
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

        <Box component="form" noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            variant="outlined"
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
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