import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/nitttr_chennai_logo.png";
import g20 from "../../assets/images/G20_India_2023_logo.svg.png";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import { ROUTES } from "../../utils/constants/routes";
import { Box, MenuItem, Select, useMediaQuery } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.background,
  color: theme.palette.customColors.text,
  position: "relative",
  display: "flex",
  // alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    minHeight: 90,
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 70,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 56,
  padding: ".5rem",
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    minHeight: 64,
  },
  [theme.breakpoints.up("xs")]: {
    // flexDirection: "column",
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
const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  textTransform: "uppercase",
}));

const StyledDropDownContainer = styled(Box)(({ theme }) => ({
  padding: ".5rem",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  fontSize: 15,
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    gap: ".5rem",
  },
}));
const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.customColors.text,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.customColors.text,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.customColors.text,
  },
  "& svg": {
    color: theme.palette.customColors.text,
  },
  color: theme.palette.customColors.text,
  height: "1.5rem",
  fontSize: ".75rem",
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  height: "1.5rem",
  fontSize: ".75rem",
}));
const Header = (props) => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <StyledAppBar>
          <StyledToolbar>
            <LogoContainer>
              <LogoImage src={logo} alt="NITTR-Chennai" />
            </LogoContainer>
            <G20Container>
              <G20Image src={g20} alt="G20-Chennai" />
            </G20Container>
          </StyledToolbar>
          <StyledDropDownContainer>
            {!matches ? (
              ROUTES.map(({ name, link }, index) => (
                <StyledLink key={index} to={link} style={{ marginRight: 20 }}>
                  {name}
                </StyledLink>
              ))
            ) : (
              <StyledSelect
                size="small"
                displayEmpty
                defaultValue="Quick Routes"
                sx={{ minWidth: "5rem" }}
              >
                <MenuItem
                  value="Quick Routes"
                  disabled
                  sx={{ display: "none" }}
                >
                  Quick Routes
                </MenuItem>
                {ROUTES.map(({ name, link }, index) => (
                  <StyledMenuItem
                    value={link}
                    key={index}
                    aria-label={name}
                    component="a"
                    href={link}
                  >
                    <StyledLink
                      key={index}
                      to={link}
                      style={{ marginRight: 20 }}
                    >
                      {name}
                    </StyledLink>
                  </StyledMenuItem>
                ))}
              </StyledSelect>
            )}
          </StyledDropDownContainer>
        </StyledAppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default Header;
