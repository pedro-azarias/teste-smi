import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  td {
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 12px
  }
  *::-webkit-scrollbar {
    width: 7px;
    height: auto;
   
  }
  *::-webkit-scrollbar-track {
    background: #fff;
    
    
  }
  *::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
    border-radius: 20px;  
    
    
  }
`