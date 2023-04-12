import styled from "styled-components";
import img from "../../../assets/social/img.png";

export const Wrapper = styled.div`
  text-align: center;
  padding: 5% 0;
  p {
    margin: 0;
    font-size: 36px;
    width: 90% !important;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    margin: 0 auto;
    margin-top: 2%;
    @media screen and (max-width: 500px) {
      font-size: 18px;
      font-weight: 600;
      margin-top: 3%;
    }
  }
  h2 {
    font-size: 77px;
    margin: 0 0 1% 0;
    font-family: "ALS Agrofont";
    font-style: normal;
    font-weight: 700;

    @media screen and (max-width: 500px) {
      font-size: 39px;
    }
  }
  & h2:hover {
    text-decoration: underline !important;
  }
  & h3:hover {
    text-decoration: underline !important;
  }
  & p:hover {
    text-decoration: underline !important;
  }
  & a:hover {
    text-decoration: underline !important;
  }
`;

export const SliderItem = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 13% 0%;
  width: 95% !important;
  border-radius: 30px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    margin: 0 auto;
  }
  h3 {
    font-size: 30px;
    color: white;
    border-bottom: 1px solid white;
    padding-bottom: 10%;
    font-family: "ALS Agrofont";
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0% 5%;
  }
  .texts div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0% 5%;
    @media screen and (max-width: 500px){
      padding: 3% 0;
    }
    p {
      font-size: 20px;
      color: white;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500 !important;
      @media screen and (max-width: 500px) {
        font-size: 14px;
      }
    }
    .bx {
      background: #dee6ff;
      padding: 10px;
      font-size: 30px;
      color: #5078ff;
      border-radius: 50%;
      @media screen and (max-width: 500px) {
        font-size: 30px;
      }
    }
  }
  .texts {
    background: #004b79cc;
    width: 100%;
    padding: 10% 0% 0%;
    margin-top: 30%;
    @media screen and (max-width: 380px) {
      margin-top: 23%;
    }
  }
  img {
    width: 95%;
    height: 350px;
    margin: 0 auto;
    border-radius: 20px;

    @media screen and (max-width: 800px) {
      width: 300px !important;
    }

    @media screen and (max-width: 620px) {
      width: 230px !important;
    }

    @media screen and (max-width: 395px) {
      width: 250px !important;
    }
  }
`;

export const WrapperCarousel = styled.div`
  background-color: #f4f4f4;
  padding: 5% 0 15%;
  height: 300px;
`;

export const Bottom = styled.div`
  padding: 5% 0;
  margin-top: 0% !important;
  @media screen and (max-width: 500px) {
    margin-top: 30% !important;
  }
  .border {
    border-bottom: 1px solid black;
    margin-bottom: 2%;
  }
  .more {
    display: flex;
    justify-content: end;
    @media screen and (max-width: 500px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  a {
    text-decoration: none;
    font-size: 20px;
    color: #0097a9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: end;
    width: 350px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    @media screen and (max-width: 500px) {
      width: 100%;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bx {
      border: 1px solid #eafdff;
      background-color: #eafdff;
      padding: 8px;
      border-radius: 50%;
      font-size: 50px;
      @media screen and (max-width: 500px) {
        margin-left: 3%;
      }
      @media screen and (max-width: 355px) {
        font-size: 30px;
      }
    }
    span {
      width: 60%;
    }
  }
`;
