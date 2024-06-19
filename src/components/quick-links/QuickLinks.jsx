import { Box, styled } from "@mui/material";
import { QUICKLINKS } from "../../utils/constants/quickLinks";
import newGif from "../../assets/gifs/newAni.gif";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: ".5rem",
  //   padding: theme.spacing(2), // Increased padding for better spacing
  //   [theme.breakpoints.up("sm")]: {
  //     minHeight: 64, // Changed to minHeight for better height control
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     minHeight: "auto", // Allow height to adjust for smaller screens
  //     padding: theme.spacing(1),
  //   },
}));

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.customColors.background,
  textDecoration: "none",
  textTransform: "uppercase",
  margin: theme.spacing(0, 1),
  display: "flex",
  alignItems: "center",
  position: "relative", // Position relative for absolute positioning of social icons
  //   [theme.breakpoints.up("sm")]: {
  //     lineHeight: "64px",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     lineHeight: "56px",
  //   },
  "&:not(:last-child)::after": {
    content: '"|"',
    marginLeft: theme.spacing(1),
  },
}));

const NewIndicator = styled("span")(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 20,
  height: 20,
  background: `url(${newGif}) no-repeat center center`,
  backgroundSize: "cover", // Changed to cover for better image display
}));

const SocialIconsContainer = styled("div")({
  marginLeft: "auto", // Push social icons to the right
  display: "flex",
  alignItems: "center",
  height: "100%", // Match the height of StyledLink
});

const SocialIcon = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(1),
  cursor: "pointer",
  color: theme.palette.customColors.background,
}));

const QuickLinks = () => {
  return (
    <StyledContainer>
      {QUICKLINKS.map(({ name, link, latest }, index) => (
        <StyledLink href={link} key={index} aria-label={name}>
          {name}
          {latest && <NewIndicator />}
        </StyledLink>
      ))}
      <SocialIconsContainer>
        <SocialIcon>
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon>
          <TwitterIcon />
        </SocialIcon>
        <SocialIcon>
          <InstagramIcon />
        </SocialIcon>
      </SocialIconsContainer>
    </StyledContainer>
  );
};

export default QuickLinks;
