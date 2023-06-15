import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --gray-100: #828799;
    --blue: #1D539E;
    --green: #59CE9F;
    --darkBlue: #1E2338;
    --white: #FFFFFF;
    --white-100: #EEEEEE;
    --white-200: #F9FBFC;
    --yellow: #FFCC29;

}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--white-200);
}

h1 {
    font-weight: 700;
}

body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border: none;
}

p {
    letter-spacing: 0.9px;
    //line-height: 1.2;
}

a {
    text-decoration: none;
    text-decoration-color : inherit;
}
`;