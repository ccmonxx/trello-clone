import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
        line-height: 1.2;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;
