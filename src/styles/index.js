import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #FFE5E6;
        --secondary: #5272F0;
        --light: #FFFFFF;
        --gray: #686868;
    }
        
    html {
        font-size: 62.5%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-size: 1.8rem;
        line-height: 1.5;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Poppins;
    }
    h1,
    h2{
        margin: 0;
        line-height: 1.5;
    }  
    button{
        font-family: Poppins;
    }
`;
