import React from "react";
import Card from "../../../constants/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//@ts-ignore
function ClothesSlider({title}) {
  const sliderSettings = {
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    speed: 500,
    touchMove: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="px-10 my-10">
      <button className="Heading px-10 py-3 mb-5 bg-primary text-[#fff] rounded-xl pointer-events-none">{title}</button>
      <Slider {...sliderSettings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
}
export default ClothesSlider;
