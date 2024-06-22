import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/nitttr_chennai_logo.png";
import g20 from "../../assets/images/G20_India_2023_logo.svg.png";
import {
  Box,
  Button,
  MenuItem,
  Popper,
  Paper,
  Grow,
  Backdrop,
  // useMediaQuery,
} from "@mui/material";
import { LINK_BUTTONS } from "../../utils/constants/header";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.background,
  color: theme.palette.customColors.text,
  position: "relative",
  display: "flex",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    minHeight: 90,
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 70,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 56,
  display: "flex",
  justifyContent: "space-between", // Ensures items are spread out evenly
  [theme.breakpoints.up("sm")]: {
    minHeight: 64,
  },
}));

const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
  height: "100%", // Ensure it takes full height of AppBar
}));

const G20Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flex: 1,
  height: "100%", // Ensure it takes full height of AppBar
}));

const LogoImage = styled("img")(({ theme }) => ({
  maxHeight: 60, // Adjust max height as per your design
  width: "auto",
  float: "left",
  [theme.breakpoints.up("sm")]: {
    maxHeight: 75,
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: 60,
    maxWidth: 200,
  },
}));

const G20Image = styled("img")(({ theme }) => ({
  maxHeight: 60, // Adjust max height as per your design
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    maxHeight: 75,
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: 60,
    maxWidth: 150,
  },
}));

const StyledButtonContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  gap: "1rem",
  fontSize: 15,
  flexWrap: "nowrap", // Prevents buttons from wrapping to the next line
  overflow: "hidden", // Ensures buttons stay within the container
  width: "100%", // Ensures container takes full width
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: "9999",
}));

const PopperArrow = styled("div")(({ theme }) => ({
  position: "absolute",
  width: 0,
  height: 0,
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderBottom: `10px solid ${theme.palette.customColors.background}`,
  top: -10,
  left: "calc(50% - 10px)",
}));

const Header = () => {
  const [menuOptions, setMenuOptions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const popperRef = useRef(null);

  const handleMenuOpen = (event, options) => {
    setMenuOptions(options || []);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickOutside = (event) => {
    if (popperRef.current && !popperRef.current.contains(event.target)) {
      handleMenuClose();
    }
  };

  useEffect(() => {
    if (anchorEl) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl]);

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <StyledAppBar>
        <StyledToolbar>
          <LogoContainer>
            <LogoImage src={logo} alt="NITTR-Chennai" />
          </LogoContainer>
          <G20Container>
            <G20Image src={g20} alt="G20-Chennai" />
          </G20Container>
        </StyledToolbar>
        <StyledButtonContainer>
          {LINK_BUTTONS.map(({ name, options }, index) => (
            <Button
              key={index}
              onClick={(event) => handleMenuOpen(event, options)}
              sx={{ textTransform: "capitalize", color: "white" }}
            >
              {name}
            </Button>
          ))}
        </StyledButtonContainer>
      </StyledAppBar>
      <Backdrop
        open={open}
        sx={{ zIndex: 9998, color: "#fff" }}
        onClick={handleMenuClose}
      />
      <StyledPopper anchorEl={anchorEl} open={open} transition ref={popperRef}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <PopperArrow />
              {menuOptions.map((option, index) => (
                <MenuItem
                  key={index}
                  onClick={handleMenuClose}
                  sx={{ textTransform: "capitalize" }}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Paper>
          </Grow>
        )}
      </StyledPopper>
    </React.Fragment>
  );
};

export default Header;
