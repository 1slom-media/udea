import styled from "styled-components";

export const Wrapper = styled.div`
  background: #001c26;
  color: white;
  padding: 2% 0;
  font-family: "Montserrat";
  font-style: normal;
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
  @media screen and (max-width: 500px) {
    padding: 5%;
  }
  img {
    margin-bottom: 1%;
    width: 30%;
    @media screen and (max-width: 545px) {
      width: 70%;
    }
  }
  .texts {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1px solid #313131;
    border-bottom: 1px solid #313131;
    height: 100%;
    padding: 5% 0;
    @media screen and (max-width: 930px) {
      display: flex;
      flex-wrap: wrap;
      padding: 2% 0 7%;
    }
    @media screen and (max-width: 430px) {
      display: flex;
      flex-direction: column;
    }
  }
  .textsUl {
    @media screen and (max-width: 430px) {
      margin: 10% 0 0 0;
    }
    p {
      color: #868689;
    }
    h3 {
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
  .ulSubtext {
    width: 30%;
    @media screen and (max-width: 930px) {
      width: 50%;
    }
    @media screen and (max-width: 430px) {
      width: 100%;
      margin: 10% 0 0 0;
    }
    h3 {
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 1px;
    }
    p {
      color: #868689;
      font-size: 22px;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2%;
    @media screen and (max-width: 545px) {
      display: flex;
      flex-direction: column-reverse;
      .icons {
        width: 60% !important;
        padding-top: 5%;
        .bx {
          color: #6e6e73 !important;
        }
      }
      .pSub {
        text-align: center;
        width: 95%;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      @media screen and (max-width: 500px) {
        margin: 0 auto;
      }
      .bx {
        font-size: 25px;
        color: white !important;
      }
    }
    div {
      display: flex;
      align-items: center;
      width: 15%;
      justify-content: space-between;
      @media screen and (max-width: 900px) {
        width: 30%;
      }
      @media screen and (max-width: 640px) {
        width: 40%;
      }
      @media screen and (max-width: 545px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        color: #868689;
        @media screen and (max-width: 545px) {
          margin: 0 2%;
          text-align: center !important;
        }
      }
    }
  }
  .h3Sub {
    padding-top: 15% !important;
  }
  .h3Subs {
    padding-top: 28% !important;
  }
`;
