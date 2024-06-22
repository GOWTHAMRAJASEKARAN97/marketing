import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  backgroundColor: "#02123F",
  color: "#fff",
  // padding: "20px 0",
  paddingTop: "20px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  display: "flex",
});

const Section = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "10px",
});

const Title = styled(Typography)({
  marginBottom: "15px",
  fontWeight: "bold",
  position: "relative", // Needed for absolute positioning of underline
});

const FooterLink = styled(Link)({
  color: "#95b1ff",
  marginBottom: "8px",
  fontWeight: "thinner",
  textDecoration: "none",
  "&:hover": {
    // textDecoration: "underline",
    color: "#eaefff",
  },
});

const Copyright = styled(Typography)({
  marginTop: "20px",
  textAlign: "center",
});

const StyledSection = styled(Section)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  fontSize: 15,
  flexDirection: "column",
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <StyledSection>
            <Title>NITTTR EXTENSION CENTERS</Title>
            <FooterLink href="#">Bengaluru</FooterLink>
            <FooterLink href="#">Hyderabad</FooterLink>
            <FooterLink href="#">Kalamassery</FooterLink>
            <FooterLink href="#">Vijayawada</FooterLink>
          </StyledSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledSection>
            <Title>QUICK LINKS</Title>
            <FooterLink href="#">RTI</FooterLink>
            <FooterLink href="#">Tenders</FooterLink>
            <FooterLink href="#">Telephone Directory</FooterLink>
            <FooterLink href="#">Mandatory Disclosure</FooterLink>
            <FooterLink href="#">Fee Payment</FooterLink>
          </StyledSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledSection>
            <Title>REPORT</Title>
            <FooterLink href="#">Institute Brochure</FooterLink>
            <FooterLink href="#">Overseas Training Courses</FooterLink>
            <FooterLink href="#">NITTTR Webinar</FooterLink>
            <FooterLink href="#">Deemed University Report</FooterLink>
            <FooterLink href="#">AICTE-EOA Report</FooterLink>
          </StyledSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledSection>
            <Title>CONTACT US</Title>
            <FooterLink href="#">NITTTR Helpdesk</FooterLink>
            <FooterLink href="#">Your Question</FooterLink>
            <FooterLink href="#">Maps & Directions</FooterLink>
            <FooterLink href="#">Campus Tour</FooterLink>
          </StyledSection>
        </Grid>
      </Grid>
      <Copyright
        style={{
          boxShadow: "inset 0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#031d66",
          width: "100%",
          padding: ".5rem",
        }}
      >
        &copy; 2024, National Institute of Technical Teachers Training and
        Research Chennai
        <br />
        Designed & Developed by Web Team NITTTR Chennai
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
