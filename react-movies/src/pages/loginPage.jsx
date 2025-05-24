import { Link } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const LoginPage = () => {
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
          Login
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          You must log in to view the protected pages
        </Typography>

        <Box component="form" noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Log in
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Not registered?{" "}
          <Link to="/signup" style={{ color: "#1976d2" }}>
            Sign Up!
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
