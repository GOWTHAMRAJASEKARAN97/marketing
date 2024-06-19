import { styled } from "@mui/material";
import image1 from "../../assets/carousel-images/banner1.jpg";
import image2 from "../../assets/carousel-images/banner3.jpg";
import image3 from "../../assets/carousel-images/banner4.jpg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  height: "30rem",
  ".swiper-button-next": {
    color: theme.palette.customColors.background,
  },

  ".swiper-button-prev": {
    color: theme.palette.customColors.background,
  },
  [theme.breakpoints.down("sm")]: {
    height: "9rem",
  },
}));
const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensure the image covers the slide
  },
  [theme.breakpoints.down("xs")]: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain", // Ensure the image covers the slide
    },
  },
}));

const Carousel = () => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30} // Adjust spacing between slides
      slidesPerView={1} // Number of slides visible at once
      autoplay={{ delay: 2000 }}
      navigation
      pagination={{ clickable: true }} // Enable clickable pagination bullets
      // scrollbar={{ draggable: true }} // Enable scrollbar with draggable thumb
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <StyledSwiperSlide>
        <img src={image1} alt="banner-1" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <img src={image2} alt="banner-2" />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <img src={image3} alt="banner-3" />
      </StyledSwiperSlide>
    </StyledSwiper>
  );
};

export default Carousel;
