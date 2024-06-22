import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import newGif from "../../assets/gifs/newAni.gif";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const MarqueeContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.customColors.background,
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "relative",
  // padding: ".5rem",
  display: "flex",
  alignItems: "center",
  // justifyContent: "space-between",
  "& > div": {
    // display: "inline-block",
    // padding: "0 1rem", // Adjust padding as needed
    // width: "100%",
  },
  "& > div > marquee": {
    display: "inline-block",
    animation: "$marquee 15s linear infinite",
    width: "100%",
  },
  "@keyframes marquee": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
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
  display: "flex",
  width: "10rem",
  flexBasis: "10%",
  justifyContent: "space-around",
});

const SocialIcon = styled("span")(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.customColors.background,
  [theme.breakpoints.down("sm")]: {
    "& svg": {
      // width: ".5rem",
      // height: ".5rem",
    },
  },
}));

const FlashNews = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <MarqueeContainer>
      <div
        style={{
          backgroundColor: "#70BCB8",
          width: "max-content",
          padding: ".5rem",
          color: "black",
          fontWeight: "bolder",
          height: "100%",
          flexBasis: "10%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        NITTTR NEWS
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ flexBasis: "80%" }}
      >
        {/* eslint-disable-next-line */}
        <marquee ref={marqueeRef}>
          NITTTR has now transformed into a Deemed-to-be-University!{" "}
          <NewIndicator />
        </marquee>
      </div>
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
    </MarqueeContainer>
  );
};

export default FlashNews;
