import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/nitttr_chennai_logo.png";
import g20 from "../../assets/images/G20_India_2023_logo.svg.png";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import { ROUTES } from "../../utils/routes";
import { Box } from "@mui/material";

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
}));

const G20Image = styled("img")(({ theme }) => ({
  maxHeight: 60, // Adjust max height as per your design
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    maxHeight: 75,
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
  fontSize: 15,
}));

const Header = (props) => {
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
            {ROUTES.map(({ name, link }, index) => (
              <StyledLink key={index} to={link} style={{ marginRight: 20 }}>
                {name}
              </StyledLink>
            ))}
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
