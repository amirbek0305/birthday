import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Google Fonts: Poppins */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Popins', sans-serif;
  }

  body {
    background-color:rgb(0, 0, 0);
  }

  input, button, select, textarea {
    font-family: 'Poppins', sans-serif;
  }

`;
