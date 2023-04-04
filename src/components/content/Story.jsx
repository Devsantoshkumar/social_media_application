import React from "react";
import data from "../../data/stories.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import './story.css'

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
};

const Story = () => {
  return (
    <div className="stories">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link to="/" key={item.id} className="story Link">
              <img src={item.sotryImage} alt="" className="storyImage" />
              <div className="storyProfile">
                <img src={item.sotryProfile} alt="" />
              </div>
              <h5 className="storyName">{item.name}</h5>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Story;
