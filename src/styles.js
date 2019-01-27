import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "media.js";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  html {
    min-height: 100%;
    display: flex;
  }
  
  body, div#wallop {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
		font-weight: 400;
		line-height: 1.2rem;

    ${media.tablet`
      font-size: 1.2rem;
		  font-weight: 400;
		  line-height: 1.6rem;
    `}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
    margin-bottom: 1em;
  }

  p {
     padding-bottom: 1em;
  }
`;
