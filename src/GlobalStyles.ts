import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "antd/dist/antd.css";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #ffffff;
        width: 200px;
        height: 200px;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
`;
