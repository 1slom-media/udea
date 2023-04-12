import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 535px) {
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-content: center !important;
    padding: 5% 0 0 0;
  }
  img {
    width: 100% !important;
    height: 700px !important;
    @media screen and (max-width: 990px) {
      width: 50% !important;
      height: 10% !important;
    }
    @media screen and (max-width: 535px) {
      width: 80% !important;
      height: 30% !important;
    }
  }
  h2 {
    color: white;
    font-size: 66px;
    font-family: "ALS Agrofont";
    font-style: normal;
    font-weight: 700;
    @media screen and (max-width: 990px) {
      font-size: 30px !important;
    }
    @media screen and (max-width: 500px) {
      font-size: 35px !important;
      text-align: start;
      margin-left: 3%;
    }
    @media screen and (max-width: 355px) {
      padding-left: 2%;
    }
  }
  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-top: 4%;
    letter-spacing: 1px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    @media screen and (max-width: 500px) {
      margin: 5% 4%;
    }
    @media screen and (max-width: 355px) {
      padding-left: 2%;
      width: 90%;
    }

    .bx {
      font-size: 30px;
    }
  }
  h2:hover {
    text-decoration: underline !important;
  }
  h3:hover {
    text-decoration: underline !important;
  }
  p:hover {
    text-decoration: none !important;
  }
  a span:hover {
    text-decoration: underline !important;
  }
`;

export const WrapperBack = styled.div`
  background-color: #102347;
`;
