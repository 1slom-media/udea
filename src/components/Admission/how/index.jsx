import Slider from "react-slick";
import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import styled from "./style.module.css";
import "./slider.css";

function How() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: 1,
        },
      },
    ],
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className={styled.wrapperBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <h2 className={styled.text}>How to apply</h2>
          </div>
        </WrapperContainer>
        <div className="slide">
          <Slider {...settings}>
            {data.map((elem, index) => (
              <div className={styled.sliderIt}>
                <div className={styled.sliderItem}>
                  <h3 className={styled.subtext}>
                    Coventry University is ranked 38th in UK
                  </h3>
                  <div className={styled.bottomdiv}>
                    <h3>Date of event</h3>
                    <p>
                      <i className="bx bx-plus"></i>
                    </p>
                  </div>
                </div>
                <button className={styled.bottomP}>{elem}</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default How;
