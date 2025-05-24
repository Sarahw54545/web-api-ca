import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate, Link } from "react-router";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Now Playing", path: "/movies/nowPlaying" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "People", path: "/people/popular" },

    // User Authenticated Only Routes
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Watchlist", path: "/movies/watchlist" },
  ];

  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/* Header */}
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>TMDB Client</Link>
          </Typography>

          {/* Message */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          
          {/* If Mobile put options in Hamburger Menu */}
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </>
          )}

          {/* Log In Button */}
          <Typography variant="h6" sx={{ paddingLeft: 3 }}>
            <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>Log In</Link>
          </Typography>

          {/* Sign Up Button */}
          <Typography variant="h6" sx={{ paddingLeft: 3 }}>
            <Link to={"/signup"} style={{ textDecoration: "none", color: "white" }}>Sign Up</Link>
          </Typography>

        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;