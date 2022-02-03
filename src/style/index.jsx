import React from 'react';
import { Global, css } from '@emotion/react';

const ResetCss = css`
  html {
    font-size: 14px;
    font-family: sans-serif;
    font-smoothing: antialiased;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,
  button,
  body,
  div,
  span {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
  }
`;

export const GlobalStyle = () => <Global styles={ResetCss} />;
