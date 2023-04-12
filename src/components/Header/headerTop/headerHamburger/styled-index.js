import styled from "styled-components";

export const Menu = styled.div`
  display: none;
  background-color: #f8f8f8;
  position: fixed;
  height: ${(props) => (props.modal ? "0px" : "100%")};
  padding: 18px 20px 0 20px;
  width: 90%;
  left: 0px;
  z-index: 1000;
  top: ${(props) => (props.modal ? "-10%" : "0%")};
  transition: 0.8s;
  overflow-y: scroll;
  @media screen and (max-width: 800px) {
    display: block;
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
 
  ul {
    a {
      text-decoration: none;
      color: black;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .ulLink {
    width: 100%;
    li {
      border-bottom: 1px solid black;
      padding-bottom: 3.5%;
      margin-bottom: 3%;
    }
  }
  .iconLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 75%;
    width: 50%;
    margin: 0 auto;
    select {
      border: none;
      outline: none;
      font-weight: bold;
      font-size: 18px;
      background-color: transparent;
    }
    .bx {
      font-size: 25px;
    }
  }
  .close {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    cursor: pointer;
    .bx {
      font-size: 30px;
      transition: all 0.55s;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
`;
