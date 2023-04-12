import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5% 0;
  @media screen and (max-width: 875px) {
    padding: 10% 0;
  }
`;

export const SliderItem = styled.div`
  background: white;
  width: 90% !important;
  border-radius: 30px;
  margin: 0 auto !important;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  img {
    width: 60%;
    height: 100% !important;
    border-start-end-radius: 0px;
    border-start-start-radius: 20px;

    @media screen and (max-width: 500px) {
      width: 100%;
      border-start-end-radius: 20px;
    }
  }
  .texts {
    background: #004b79;
    border-end-end-radius: 30px;
    border-start-end-radius: 30px;
    color: black;
    padding: 0 3%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: white;
    @media screen and (max-width: 500px) {
      padding: 5%;
      border-end-end-radius: 20px;
      border-start-end-radius: 0px;
      border-end-start-radius: 20px;
    }

    .subtext {
      color: #82c0ff;
      font-size: 24px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      @media screen and (max-width: 500px) {
        font-size: 11px !important;
      }
    }
    h3 {
      font-size: 25px;
      font-family: "ALS Agrofont";
      font-style: normal;
      font-weight: 700;
      @media screen and (max-width: 500px) {
        font-size: 20px !important;
      }
    }
    .date {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      @media screen and (max-width: 500px) {
        margin: 5% 0 0 0;
      }

      p {
        font-size: 20px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        @media screen and (max-width: 500px) {
          font-size: 11px;
        }
      }
      p:nth-child(1) {
        font-size: 20px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        @media screen and (max-width: 500px) {
          font-size: 14px;
        }
      }
    }
  }
`;
