import React from "react";
import Carousel from "../../components/carousel/Carousel";
import FlashNews from "../../components/flash-news/FlashNews";
import News from "../../components/news/News";

const Home = () => {
  return (
    <>
      <Carousel />
      <FlashNews />
      <News />
    </>
  );
};

export default Home;
