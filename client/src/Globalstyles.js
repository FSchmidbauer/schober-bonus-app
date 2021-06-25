import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        line-height: 1.5;
    }

    body {
        margin: 0;
        font-family: verdana;
        font-size: 1.5rem;
        text-align: center;
    }
`;
