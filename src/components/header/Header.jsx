import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/nitttr_chennai_logo.png";
import g20 from "../../assets/images/G20_India_2023_logo.svg.png";
import {
  Box,
  Button,
  Popper,
  Paper,
  Grow,
  Backdrop,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { LINK_BUTTONS } from "../../utils/constants/header";
import { useNavigate } from "react-router-dom";

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
  padding: ".5rem",
  minHeight: 56,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    minHeight: 64,
  },
}));

const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
  height: "100%",
}));

const G20Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flex: 1,
  height: "100%",
}));

const LogoImage = styled("img")(({ theme }) => ({
  maxHeight: 60,
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
  maxHeight: 60,
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
  flexWrap: "nowrap",
  overflow: "hidden",
  width: "100%",
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: "9999",
  '&[data-popper-placement*="right"] .popper-arrow': {
    left: "-10px",
    top: "calc(50% - 10px)",
    transform: "rotate(90deg)",
  },
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
  "&.right": {
    borderBottom: "none",
    borderLeft: `10px solid ${theme.palette.customColors.background}`,
    top: "calc(50% - 10px)",
    left: -10,
  },
}));

const Header = () => {
  const navigate = useNavigate();
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
    /*eslint-disable-next-line */
  }, [anchorEl]);

  const open = Boolean(anchorEl);

  const NestedListItem = ({ name, options }) => {
    const [openNestedList, setOpenNestedList] = useState(false);

    const handleClickNestList = () => {
      setOpenNestedList(!openNestedList);
    };

    return (
      <>
        <ListItem button onClick={handleClickNestList}>
          <ListItemText primary={name} sx={{ textTransform: "capitalize" }} />
          {options ? openNestedList ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
        {options && (
          <Collapse in={openNestedList} timeout="auto" unmountOnExit>
            <List
              component="div"
              // disablePadding
              style={{
                paddingLeft: 32 /* Adjust the paddingLeft as needed */,
              }}
            >
              {options.map((option, index) => (
                <NestedListItem key={index} {...option} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  };

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
          {LINK_BUTTONS.map(({ name, options, link }, index) => (
            <Button
              key={index}
              onClick={(event) => {
                options?.length && handleMenuOpen(event, options);
                link && navigate(link);
              }}
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
              <PopperArrow className="popper-arrow" />
              <Box sx={{ width: 250, maxHeight: "500px", overflowY: "auto" }}>
                <List>
                  {menuOptions.map((option, index) => (
                    <NestedListItem key={index} {...option} />
                  ))}
                </List>
              </Box>
            </Paper>
          </Grow>
        )}
      </StyledPopper>
    </React.Fragment>
  );
};

export default Header;
