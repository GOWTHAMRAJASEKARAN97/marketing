import React, { useState, useRef } from "react";
import { Card, CardContent, CardMedia, styled } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NEWS } from "../../utils/constants/news";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const StyledContainer = styled("div")(({ theme }) => ({
  height: "100%",
  //   backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  overflow: "hidden",
}));

const StyledHeader = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  fontWeight: "bold",
}));

const StyledCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  padding: "1rem 0",
  overflowX: "auto", // Enable horizontal scrolling
  scrollbarWidth: "none", // Hide scrollbar for Firefox
  "-ms-overflow-style": "none", // Hide scrollbar for IE and Edge
  "&::-webkit-scrollbar": {
    display: "none", // Hide scrollbar for Chrome, Safari, Opera
  },
  transition: "transform 0.5s ease-in-out", // Smooth transition for scroll animation
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minWidth: "300px",
  maxWidth: "100%",
  backgroundColor: theme.palette.background.default,
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out", // Smooth transition for card hover
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const StyledList = styled("li")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  gap: ".5rem",
  display: "flex",
  justifyContent: "center",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flex: "1",
}));

const StyledCardMedia = styled(CardMedia)({
  height: "200px",
  borderRadius: "12px 12px 0 0",
  objectFit: "cover",
});

const StyledTitle = styled("h2")({
  fontSize: "1.5rem",
  margin: "1rem 0",
});

const StyledSubtitle = styled("p")({
  fontSize: "1rem",
  lineHeight: "1.4",
  marginBottom: "1rem",
});

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.secondary.dark,
  },
}));

const News = () => {
  const itemsPerPage = 5; // Number of news items per page
  const [currentPage, setCurrentPage] = useState(0);
  const cardContainerRef = useRef(null);

  const totalPages = Math.ceil(NEWS.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    scrollToCardContainer();
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    scrollToCardContainer();
  };

  const scrollToCardContainer = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft = 0;
      cardContainerRef.current.scrollLeft +=
        cardContainerRef.current.offsetWidth;
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleNews = NEWS.slice(startIndex, endIndex);

  return (
    <StyledContainer>
      <StyledHeader>
        <NewspaperIcon fontSize="large" />
        News
      </StyledHeader>
      <div style={{ position: "relative" }}>
        <StyledCardContainer ref={cardContainerRef}>
          {visibleNews.map(({ image, heading, subheading, links }, index) => (
            <StyledCard key={index}>
              <StyledCardMedia image={image} title={heading} />
              <StyledCardContent>
                <StyledTitle>{heading}</StyledTitle>
                <StyledSubtitle>{subheading}</StyledSubtitle>
              </StyledCardContent>
              <CardContent>
                {links.map(({ name, link }, idx) => (
                  <StyledList key={idx}>
                    <StyledLink href={link}>{name}</StyledLink>
                    <OpenInNewIcon />
                  </StyledList>
                ))}
              </CardContent>
            </StyledCard>
          ))}
        </StyledCardContainer>
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translateY(-50%)",
          }}
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
          }}
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </StyledContainer>
  );
};

export default News;
