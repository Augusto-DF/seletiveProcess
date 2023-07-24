import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background-color: #EDEEE9;
  }

  button {
    cursor: pointer;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  #map {
    height: 410px;
  }

  #map div{
    width: initial;
  }
  
  h1,h2,h3,h4,h5,h6,p,span {
    font-size: 16px;
    color: #575757;
  }
`;
