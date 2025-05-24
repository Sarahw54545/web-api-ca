import { useContext, useState } from "react";
import { AuthContext } from '../contexts/authContext';
import { Link, Navigate, useLocation } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const LoginPage = () => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const login = async () => {
        try {
            await context.authenticate(userName, password);
            if (!context.isAuthenticated) {
                setError("Invalid username or password.");
            }
        } catch (e) {
            setError("Something went wrong. Please try again.");
        }
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
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
                    Login
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    You must log in to view the protected pages
                </Typography>

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
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={login}
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
