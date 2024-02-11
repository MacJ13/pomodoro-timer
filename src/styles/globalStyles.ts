import { createGlobalStyle } from "styled-components";
import "./fonts.module.css";

const GlobalStyle = createGlobalStyle`


*,
*::after,
*::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

html {
    box-sizing: border-box;
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
    
}

body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
}

button {
    appearance: none;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  a,
  button {
    font-family: inherit;
  }
  
`;

export default GlobalStyle;
