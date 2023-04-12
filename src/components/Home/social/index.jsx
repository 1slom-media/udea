import Slider from "react-slick";
import { Wrapper, SliderItem, WrapperCarousel, Bottom } from "./styled-index";
import { WrapperContainer, WrapperContainerFull } from "../../../App-styled";
import "./slider.css";

function Social() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
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
          dots: true,
        },
      },
    ],
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <WrapperContainer>
        <Wrapper>
          <h2>Social life at UDEA</h2>
          <p>
            We strive to create the positive, friendly and welcoming community
            among students through various social events and activities.
          </p>
        </Wrapper>
      </WrapperContainer>
      <WrapperCarousel>
        <div>
          <div className="sliderr">
            <Slider {...settings}>
              {data.map(() => (
                <div className="card">
                  <SliderItem>
                    <div className="texts">
                      <h3>Coventry University is ranked 38th in UK</h3>
                      <div>
                        <p>Date of event</p>
                        <i class="bx bx-plus"></i>
                      </div>
                    </div>
                  </SliderItem>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </WrapperCarousel>
      <WrapperContainer>
        <Bottom>
          <div className="border"></div>
          <div className="more">
            <a href="#">
              <span> See our Community & Campus</span>{" "}
              <i class="bx bx-chevron-right"></i>
            </a>
          </div>
        </Bottom>
      </WrapperContainer>
    </>
  );
}

export default Social;
