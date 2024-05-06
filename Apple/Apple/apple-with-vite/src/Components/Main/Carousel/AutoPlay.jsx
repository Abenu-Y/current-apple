import React , { useRef } from "react";
import Slider from "react-slick";
import Images from "../../../constant/Images/Images";

function AutoPlay() {
//     let sliderRef = useRef(null);
//   const play = () => {
//     sliderRef.slickPlay();
//   };
//    const pause = () => {
//     sliderRef.slickPause();
//   };
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider  {...settings}>
      {/* <Slider ref={slider => (sliderRef = slider)} {...settings}> */}
        <div>
          <img src={Images.yoga} alt="yoga" />
        </div>
        
        <div>
        <img src={Images.glutes} alt="glutes" />

        </div>
        <div>
        <img src={Images.nba} alt="nba" />

        </div>
       
        <div>
        <img src={Images.island} alt="island" />

        </div>
      </Slider>

      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </div>
  );
}

export default AutoPlay;