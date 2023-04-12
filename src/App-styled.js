import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;
export const WrapperContainerFull = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
export const GlobalStyle = createGlobalStyle`
 html{
    scroll-behavior:smooth
    }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    box-sizing: border-box;

    ul{
    list-style: none;
    margin: 0;
    padding: 0;
    }
    h2{
    margin: 0;
    padding: 0;
    }
  }
`;
