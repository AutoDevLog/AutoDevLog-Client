import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');

  body {
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    font-style: normal;
  }
`;

export default GlobalStyle;