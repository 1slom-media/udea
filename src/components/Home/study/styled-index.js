import styled from "styled-components";
import img from "../../../assets/study/img.png";

export const WrapperBack = styled.div`
  background-color: #f4f4f4;
  padding: 5% 0;
`;

export const Wrapper = styled.div`
  h2:hover {
    text-decoration: underline !important;
  }
  h3:hover {
    text-decoration: underline !important;
  }
  p:hover {
    text-decoration: underline !important;
  }
  a span:hover {
    text-decoration: underline !important;
  }
  h2 {
    text-align: center;
    font-size: 55px;
    letter-spacing: 1px;
    font-family: "ALS Agrofont";
    font-style: normal;
    font-weight: 700;
    span {
      color: #0066cc;
    }
    @media screen and (max-width: 610px) {
      font-size: 30px;
    }
    @media screen and (max-width: 500px) {
      font-size: 39px;
      width: 98%;
      margin: 0 auto;
    }
    @media screen and (max-width: 355px) {
      font-size: 24px;
    }
  }
  .iframe {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin: 1% 0;
    @media screen and (max-width: 625px) {
      height: 400px;
    }
    @media screen and (max-width: 500px) {
      width: 95%;
      margin: 4% auto !important;
      height: 300px;
    }
  }
  .cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 935px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .conventrCard {
      border-radius: 40px;
      width: 58%;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: cover;
      .textss {
        background: #004b79cc;
        margin-top: 47%;
        color: white;
        padding: 10% 5%;
        @media screen and (max-width: 935px) {
          margin: 15% 0 10% !important;
        }
        @media screen and (max-width: 430px) {
          padding: 5%;
          margin-top: 35% !important;
        }
      }
      @media screen and (max-width: 935px) {
        width: 90%;
        padding: 10% 0;
      }
      p {
        font-size: 30px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        @media screen and (max-width: 500px) {
          font-size: 18px;
        }
      }
      h3 {
        font-family: "ALS Agrofont";
        font-style: normal;
        font-weight: 700;
        font-size: 75px;
        @media screen and (max-width: 500px) {
          font-size: 25px;
        }
      }
    }
    .miniCards {
      width: 40%;
      @media screen and (max-width: 935px) {
        width: 90%;
        margin: 3% 0 0 0;
      }
      .card {
        background-color: white;
        padding: 6%;
        border-radius: 30px;
        div {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
        p {
          font-size: 25px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          @media screen and (max-width: 500px) {
            font-size: 13px;
            margin-top: 10%;
            font-weight: 700;
          }
        }
        h3 {
          color: #0066cc;
          font-size: 35px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          border-bottom: 1px solid #c7c7c7;
          padding-bottom: 5%;
          @media screen and (max-width: 500px) {
            font-size: 19px;
            margin-top: 2%;
            padding-bottom: 8%;
            border-bottom: 1px solid #c7c7c7;
          }
        }
        img {
          /* width: 100%; */
          margin: 0 auto !important;
          height: 190px;
          width: 310px;
          border-radius: 30px;

          @media screen and (max-width: 500px) {
            width: 162.37px;
            height: 104px;
          }
        }
      }
      .topCard {
        margin-bottom: 5%;
      }
    }
  }
  .shortCards {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    margin: 2% 0 0 0;
    border-bottom: 1px solid black;
    padding: 0 0 5% 0;
    @media screen and (max-width: 935px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .card {
      background-color: white;
      padding: 3%;
      border-radius: 30px;
      width: 43%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width: 500px) {
        width: 78%;
        padding: 6%;

        &:nth-child(1) {
          margin-top: 3%;
        }
        &:nth-child(2) {
          margin-top: 5%;
        }
      }
      h3,
      p {
        margin: 0;
      }
      h3 {
        color: #0066cc;
        font-size: 35px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        @media screen and (max-width: 500px) {
          font-size: 19px;
          margin-top: 2%;
          padding-bottom: 8%;
          border-bottom: 1px solid #c7c7c7;
        }
      }
      p {
        font-size: 20px;
        margin-top: 5%;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        @media screen and (max-width: 500px) {
          font-size: 13px;
          margin-top: 10%;
        }
      }
      img {
        margin: 0 auto !important;
        height: 200px;
        border-radius: 30px;
        @media screen and (max-width: 500px) {
          width: 162.37px;
          height: 104px;
        }
      }
      .divImg {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
      .imgss {
        width: 70%;
        height: 150px;
        @media screen and (max-width: 500px) {
          width: 162.37px;
          height: 70px;
        }
      }
    }
  }
  .likn {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 4% 0 0 0;
  }
  a {
    text-decoration: none;
    font-size: 25px;
    color: #0097a9;
    display: flex;
    align-items: center;
    justify-content: end;
    text-align: end;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    span {
      margin-right: 5%;
      @media screen and (max-width: 400px) {
        margin: 0 !important;
      }
    }
    @media screen and (max-width: 500px) {
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100% !important;
      padding: 1% 3%;
    }
    .bx {
      border: 1px solid #dee6ff;
      background-color: #dee6ff;
      padding: 8px;
      border-radius: 50%;
      font-size: 50px;
      margin: 0 1% 0 0;

      @media screen and (max-width: 400px) {
        font-size: 30px;
      }
    }
  }
`;
