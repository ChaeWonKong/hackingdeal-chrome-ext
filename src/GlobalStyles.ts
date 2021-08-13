import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #fff;
        width: 360px;
        height: 468px;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    button {
        border: none;
        cursor: pointer;
    }
    textarea:focus, input:focus{
        outline: none;
    }
    select {
        outline: none;
        border: none;
    }
`;
