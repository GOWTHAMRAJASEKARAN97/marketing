import React from "react";
import Carousel from "../../components/carousel/Carousel";
import FlashNews from "../../components/flash-news/FlashNews";
import NewsCarousel from "../../components/news/NewsCarousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <FlashNews />
      <NewsCarousel />
    </>
  );
};

export default Home;
