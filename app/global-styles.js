import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #fafafa;
  }

  body {
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Raleway', Arial, Helvetica,  sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  p,
  label {
    font-family: 'Cabin', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
    font-size: 1.15em;
  }
`;
