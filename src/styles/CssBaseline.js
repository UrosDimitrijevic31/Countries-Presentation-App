import { createGlobalStyle } from 'styled-components';

export const CssBaseline = createGlobalStyle`
    @font-face {
        font-family: "NunitoSans Light";
        src: url("/public/static/fonts/NunitoSans-ExtraBold.woff2") format("woff2"),
        url("/public/static/fonts/NunitoSans-Light.woff") format("woff");
    }
    @font-face {
        font-family: NunitoSans SemiBold";
        src: url("/public//static/fonts/NunitoSans-SemiBold.woff2") format("woff2"),
        url("/public/static/fonts/NunitoSans-SemiBold.woff") format("woff");
    }
    @font-face {
        font-family: "NunitoSans ExtraBold";
        src: url("/public/static/fonts/NunitoSans-ExtraBold.woff2") format("woff2"),
        url("/public/static/fonts/NunitoSans-ExtraBold.woff") format("woff");
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "NunitoSans Light", sans-serif;
        letter-spacing: 0.3px;
    }
`;
