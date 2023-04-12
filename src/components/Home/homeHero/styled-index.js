import styled from "styled-components";
import img from "../../../assets/home/homehero/back.png";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden !important;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 5% 0;
  }
  & h2:hover {
    text-decoration: underline !important;
  }
  & h3 span:hover {
    text-decoration: underline !important;
  }
  & p:hover {
    text-decoration: underline !important;
  }
  & a:hover {
    text-decoration: underline !important;
  }
  .header {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 5% 0% 10%;
    @media screen and (max-width: 950px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 560px) {
      padding: 10% 0% 10%;
    }
    .texts {
      width: 45%;
      background: #004b79e5;
      color: white;
      padding: 3%;
      @media screen and (max-width: 950px) {
        width: 100%;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        margin-top: 228px;
        h3 {
          span {
            font-size: 18px;
          }
        }
      }
      p {
        font-size: 40px;
        width: 90%;
        color: white;
        font-family: "ALS Agrofont";
        font-style: normal;
        font-weight: 700;
        margin: 0 0 4%;
        @media screen and (max-width: 1170px) {
          font-size: 40px;
        }
        @media screen and (max-width: 950px) {
          font-size: 40px;

          width: 100%;
          text-align: center;
          margin: 0;
        }
        @media screen and (max-width: 560px) {
          font-size: 30px;
        }
        @media screen and (max-width: 500px) {
          font-size: 28px;
          text-align: start;
          padding-left: 3%;
        }
      }
      h3 {
        display: flex;
        align-items: center !important;
        text-decoration: none;
        cursor: pointer;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        color: white !important;
        @media screen and (max-width: 950px) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media screen and (max-width: 500px) {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-left: 3%;
          margin-top: 3%;
        }
        font-size: 30px !important;
        font-weight: 600;
        color: white;
        .bx {
          font-size: 30px;
          margin-top: 10px !important;
          color: white;
        }
      }
    }
  }
`;

export const WrapperBack = styled.div`
  background-image: url(${img});
`;

export const Box = styled.div`
  width: 30%;
  position: absolute;
  background: #001c26cc;
  left: ${(props) => (props.box ? "1800px" : "60%")} !important ;
  transition: 0.8s;
  overflow-y: none;
  height: 100%;
  top: 0%;
  padding: 3%;
  @media screen and (max-width: 950px) {
    width: 90%;
    left: ${(props) => (props.box ? "1800px" : "2%")} !important ;
    top: 3%;
  }
  @media screen and (max-width: 730px) {
    height: 380px !important;
  }
  @media screen and (max-width: 500px) {
    width: 94%;
    left: ${(props) => (props.box ? "1800px" : "0%")} !important ;
    top: 0%;
  }

  .moreDiv {
    display: flex;
    align-items: center !important;
    justify-content: end;
    padding: 4% 0 0;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    color: #5078ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 230px;
  }
  a h3 {
    border: 1px solid #dee6ff;
    background-color: #dee6ff;
    padding: 8px 13px;
    border-radius: 50%;
    font-size: 25px;
  }
  @media screen and (max-width: 950px) {
    .moreDiv a {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    .moreDiv p {
      margin-left: 3%;
    }
  }
  ul {
    border-bottom: 2px solid white;
    padding-bottom: 5%;

    @media screen and (max-width: 950px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    @media screen and (max-width: 730px) {
      display: flex;
      flex-direction: column;
    }
  }
  li {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 4% 0 5%;
    @media screen and (max-width: 730px) {
      padding: 2% 0 0 0 !important;
    }
  }
  .borderLi {
    border-top: 1px solid #c7c7c7;
    border-bottom: 1px solid #c7c7c7;
    padding-bottom: 7%;
    @media screen and (max-width: 950px) {
      border: none;
    }
  }

  img {
    width: 50px;
    margin-right: 5%;
  }

  p {
    font-size: 20px;
    margin: 0;
    width: 90%;
    padding: 0;
    color: white;
    font-weight: bold;
    /* line-height: 25px;/ */
    @media screen and (max-width: 1070px) {
      font-size: 16px !important;
    }
  }
  @media screen and (max-width: 1170px) {
    p {
      font-size: 20px;
    }
  }
`;
