import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1000 !important;
  .an {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      padding: 1% 2%;

      img {
        width: 210px !important;
        height: 50px !important;
      }
    }
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
    img {
      width: 300px;
      height: 75px;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: #d8d8d8;
        font-size: 17px;
        font-weight: 500 !important;
        font-family: "Montserrat", sans-serif !important;
        transition: 0.65s;
        font-weight: 100;

        &:hover {
          color: white;
        }
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
    .links {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 1210px) {
        width: 70%;
      }
      @media screen and (max-width: 945px) {
        width: 75%;
      }
      @media screen and (max-width: 800px) {
        display: none;
      }
      .ulLinks {
        width: 77%;
        @media screen and (max-width: 1210px) {
          width: 79%;
        }
      }
      .iconLinks {
        width: 15%;
        @media screen and (max-width: 1210px) {
          width: 19%;
        }
        select {
          border: none;
          outline: none;
          font-weight: bold;
          background: #2d80e3;
          color: white;
        }
        li:nth-child(1) {
          padding: 0 !important;
        }
        li {
          padding: 7px 10px 5px 8px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.6s;
        }
        li:nth-child(2):hover {
          background-color: #4d91e4 !important;
        }
        li:nth-child(3):hover {
          background-color: #4d91e4 !important;
        }
      }
    }
    .menu {
      display: none;
      color: white;
      @media screen and (max-width: 800px) {
        display: block;
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
  .ai {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent !important;
    @media screen and (max-width: 500px) {
      padding: 1% 2%;

      img {
        width: 210px !important;
        height: 50px !important;
      }
    }
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
    img {
      width: 300px;
      height: 75px;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: #d8d8d8;
        font-size: 17px;
        font-weight: 500 !important;
        font-family: "Montserrat", sans-serif !important;
        transition: 0.65s;
        font-weight: 100;

        &:hover {
          color: white;
        }
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
    .links {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 1210px) {
        width: 70%;
      }
      @media screen and (max-width: 945px) {
        width: 75%;
      }
      @media screen and (max-width: 800px) {
        display: none;
      }
      .ulLinks {
        width: 77%;
        @media screen and (max-width: 1210px) {
          width: 79%;
        }
      }
      .iconLinks {
        width: 15%;
        @media screen and (max-width: 1210px) {
          width: 19%;
        }
        select {
          border: none;
          outline: none;
          font-weight: bold;
          background: #2d80e3;
          color: white;
        }
        li:nth-child(1) {
          padding: 0 !important;
        }
        li {
          padding: 7px 10px 5px 8px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.6s;
        }
        li:nth-child(2):hover {
          background-color: #4d91e4 !important;
        }
        li:nth-child(3):hover {
          background-color: #4d91e4 !important;
        }
      }
    }
    .menu {
      display: none;
      color: white;
      @media screen and (max-width: 800px) {
        display: block;
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
`;

export const WrapperBack = styled.div`
  background: linear-gradient(90.3deg, #0066cc 0%, #3685e8 99.74%);
  z-index: 1000;
`;
