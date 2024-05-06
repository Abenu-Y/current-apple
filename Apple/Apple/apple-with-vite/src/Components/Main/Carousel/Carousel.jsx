import React from "react";
import Slider from "react-slick";
import Images from "../../../constant/Images/Images";

function Carousel() {
 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container carous">
      
      <Slider  {...settings}>
        <div>
          <div></div>
          <img src={Images.documentary} alt="documentary" />
        </div>
        <div>
        <img src={Images.drama} alt="drama" />
        </div>
        <div>
        <img src={Images.comedy} alt="comedy" />

        </div>
        <div>
        <img src={Images.mls} alt="major league soccer" />

        </div>
        <div>
        <img src={Images.livegame} alt="game" />

        </div>
        <div>
        <img src={Images.thriller} alt="thriller" />

        </div>
        <div>
        <img src={Images.fiction} alt="fiction" />
        </div>
      
      </Slider>
     
    </div>
  );
}
export default Carousel