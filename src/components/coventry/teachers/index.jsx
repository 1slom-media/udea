import Slider from "react-slick";
import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";
import "./slider.css";

function TeachersCoventry() {
  const data = [1, 2, 3, 4, 5, 6];
  const settings = {
    dots: false,
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
  return (
    <>
      <div className={styled.HeaderBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <h2>Преподаватели</h2>
            <p>
              We strive to create the positive, friendly and welcoming community
              among students through various social events and activities.
            </p>
          </div>
        </WrapperContainer>
      </div>
      <div className="slidetTeach">
        <div className={styled.Sliderback}>
          <div className={styled.Slider}>
            <Slider {...settings}>
              {data.map((elem, index) => (
                <div>
                  <div className={styled.sliderItem}>
                    <img
                      src="https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg"
                      alt="photo"
                    />
                    <div className={styled.texts}>
                      <h2>Coventry University is ranked 38th in UK</h2>
                      <p>Date of event</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <WrapperContainer>
        <div className={styled.buttons}>
          <button>
            Explore programs
            <p>
              <i class="bx bx-chevron-right"></i>
            </p>
          </button>
          <button>
            Click here to apply
            <p>
              <i class="bx bx-chevron-right"></i>
            </p>
          </button>
        </div>
      </WrapperContainer>
    </>
  );
}

export default TeachersCoventry;
