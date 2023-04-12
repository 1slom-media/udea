import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f8f8f8;
  font-family: "Montserrat" !important;
  h2:hover {
    text-decoration: underline !important;
  }
  h3:hover {
    text-decoration: underline !important;
  }
  p:hover {
    text-decoration: underline !important;
  }
  a:hover {
    text-decoration: underline !important;
  }
  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ul {
      display: flex;
      align-items: center;
      padding: 2% 0%;
      @media screen and (max-width: 662px) {
        display: none;
      }
      h2 {
        text-transform: uppercase;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
      }
      .h2text {
        margin-left: 18%;
      }
    }
    div {
      width: 50%;
      text-align: end;
      a {
        margin: 0 !important;
        padding: 0 !important;
        width: 30%;
        @media screen and (max-width: 395px) {
          width: 40%;
        }
      }
      @media screen and (max-width: 500px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2% 0;
      }
    }
    .btn2 {
      background: linear-gradient(90.3deg, #0066cc 0%, #3685e8 99.74%);
      color: white;
      padding: 10px 20px;
      border-radius: 30px;
      cursor: pointer;
      margin: 0 0% 0 1%;
      border: 1px solid #5078ff;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;

      @media screen and (max-width: 500px) {
        font-size: 15px;
      }
    }
    .btn1 {
      background: #e5eeff;
      color: #0066cc;
      padding: 10px 20px;
      border-radius: 30px;
      cursor: pointer;
      margin: 0 0% 0 1%;
      border: 1px solid #e5eeff;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      @media screen and (max-width: 500px) {
        font-size: 15px;
      }
    }
  }
`;
