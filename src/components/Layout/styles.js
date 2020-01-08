import reset from "modern-css-reset";
import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import { COLORS } from "../../styles/colors";
import { MEDIA } from "../../styles/media";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  html {
    display: flex;
  }

  body {
    font-family: 'Roboto', serif;
    font-size: 16px;
    font-size: 1rem;
    color: ${rgba(COLORS.black, 0.9)};

    ${MEDIA.desktopWide`
      font-size: 1.5rem;
    `}
  }
  
  body, 
  div#___gatsby, 
  div#gatsby-focus-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${COLORS.black};
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
  }
`;
