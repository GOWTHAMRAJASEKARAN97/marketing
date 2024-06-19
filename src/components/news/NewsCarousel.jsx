// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { NEWS } from "../../utils/constants/news";
import { Card, CardContent, CardMedia, styled, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "300px",
  height: "100%",
  maxHeight: "450px",
  backgroundColor: theme.palette.background.default,
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const StyledList = styled("li")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  gap: ".5rem",
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
}));

const StyledCardContent = styled(CardContent)({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const StyledCardMedia = styled(CardMedia)({
  height: "200px",
  borderRadius: "12px 12px 0 0",
  objectFit: "cover",
});

const StyledTitle = styled(Typography)({
  fontSize: "1.25rem",
  margin: "0.5rem 0",
  fontWeight: "bold",
});

const StyledSubtitle = styled(Typography)({
  fontSize: "1rem",
  lineHeight: "1.4",
  marginBottom: "0.5rem",
  color: "gray",
});

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: "none",
  fontSize: "0.875rem",
  display: "flex",
  alignItems: "center",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.secondary.dark,
  },
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  padding: "1rem",
}));

const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
}));

const StyledContainer = styled("div")(({ theme }) => ({
  padding: "1rem",
}));

const StyledHeader = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  gap: ".5rem",
  marginBottom: "1rem",
}));

const NewsCarousel = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <NewspaperIcon fontSize="large" />
        News
      </StyledHeader>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {NEWS.map(({ image, heading, subheading, links }, index) => (
          <StyledSwiperSlide key={index}>
            <StyledCard>
              <StyledCardMedia image={image} title={heading} />
              <StyledCardContent>
                <StyledTitle variant="h2">{heading}</StyledTitle>
                <StyledSubtitle variant="subtitle1">{subheading}</StyledSubtitle>
              </StyledCardContent>
              <CardContent>
                {links.map(({ name, link }, idx) => (
                  <StyledList key={idx}>
                    <StyledLink
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name} <OpenInNewIcon fontSize="small" />
                    </StyledLink>
                  </StyledList>
                ))}
              </CardContent>
            </StyledCard>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </StyledContainer>
  );
};

export default NewsCarousel;
