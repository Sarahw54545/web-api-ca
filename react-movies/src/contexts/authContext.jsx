import { useState, createContext, useContext } from "react";
import { login, signup } from "../api/user-api";
import { SnackbarContext } from "./promptContext";

export const AuthContext = createContext(null); //eslint-disable-line

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken); //eslint-disable-line
  const [userName, setUserName] = useState("");

  const { showSnackbar } = useContext(SnackbarContext);

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
      showSnackbar("Login Successful!", "success");
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    if (result.success) {
      showSnackbar("Registration Successful!", "success");
    }
    return result.success;
  };

  const signout = () => {
    setTimeout(() => {
      setIsAuthenticated(false);
      showSnackbar("Logged out Successfully", "info");
    }, 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName
      }}
    >
      {props.children} {/* eslint-disable-line */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
