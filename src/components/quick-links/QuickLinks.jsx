import { Box, MenuItem, Select, styled, useMediaQuery } from "@mui/material";
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
  padding: ".5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: ".5rem",
    justifyContent: "space-around",
  },
}));

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.customColors.background,
  textDecoration: "none",
  textTransform: "uppercase",
  margin: theme.spacing(0, 1),
  display: "flex",
  alignItems: "center",
  position: "relative",
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
  backgroundSize: "cover",
}));

const SocialIconsContainer = styled("div")({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const SocialIcon = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(1),
  cursor: "pointer",
  color: theme.palette.customColors.background,
  [theme.breakpoints.down("sm")]: {
    "& svg": {
      // width: ".5rem",
      // height: ".5rem",
    },
  },
}));
const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.customColors.background,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.customColors.background,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.customColors.background,
  },
  "& svg": {
    color: theme.palette.customColors.background,
  },
  height: "1.5rem",
  fontSize: ".75rem",
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  height: "1.5rem",
  fontSize: ".75rem",
}));

const QuickLinks = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <StyledContainer>
      {!matches ? (
        QUICKLINKS.map(({ name, link, latest }, index) => (
          <StyledLink href={link} key={index} aria-label={name}>
            {name}
            {latest && <NewIndicator />}
          </StyledLink>
        ))
      ) : (
        <StyledSelect
          size="small"
          displayEmpty
          defaultValue="Quick Links"
          sx={{ minWidth: "5rem", color: "white", borderColor: "white" }}
        >
          <MenuItem value="Quick Links" disabled sx={{ display: "none" }}>
            Quick Links
          </MenuItem>
          {QUICKLINKS.map(({ name, link, latest }, index) => (
            <StyledMenuItem
              value={link}
              key={index}
              aria-label={name}
              component="a"
              href={link}
            >
              <Box display="flex" alignItems="center">
                {name}
                {latest && <NewIndicator />}
              </Box>
            </StyledMenuItem>
          ))}
        </StyledSelect>
      )}
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
