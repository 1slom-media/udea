import Slider from "react-slick";
import { SliderItem, Wrapper, SliderComponent } from "./styled-index";
import Img from "../../../assets/homeCarusel/img.png";
import { WrapperContainer } from "../../../App-styled";
import BottomMore from "../../bottomMore";
import "./slider.css";
function HomeCarusel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "350px",
    slidesToShow: 1,
    speed: 500,
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
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px",
          autoplay: 1,
        },
      },
    ],
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Wrapper className="WrapperHome">
        <Slider {...settings}>
          {data.map((elem, index) => (
            <div className="sliderIte">
              <SliderItem className="asasas">
                <img src={Img} alt="img" />
                <div className="texts">
                  <div>
                    <p className="subtext">News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis
                    </h3>
                  </div>
                  <div className="date">
                    <p>24 Feb, 2023</p>
                    <p>Coventry</p>
                  </div>
                </div>
              </SliderItem>
            </div>
          ))}
        </Slider>
      </Wrapper>
      <BottomMore />
    </>
  );
}

export default HomeCarusel;
