import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5% 0 15%;
  .border {
    border-top: 1px solid black;
  }
  a {
    color: #0097a9;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 18px;
    padding-top: 1%;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    .bx {
      background-color: #eeeeee;
      color: #0097a9;
      margin-left: 0%;
      font-size: 40px;
      border-radius: 50%;
      padding: 5px;
      @media screen and (max-width: 355px) {
        font-size: 30px;
      }
    }
    span {
      margin-right: 3%;
    }
  }
  a span:hover {
    text-decoration: underline;
  }
`;
