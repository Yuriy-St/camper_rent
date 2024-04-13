import { css } from '@emotion/react';
import '@fontsource/inter';
import { theme } from './theme';
import { fontSizes } from './units';

export default function globalStyles() {
  return css`
    :root {
      font-family: ${theme.typography.fontFamily};
      font-size: ${fontSizes.medium};
    }

    body {
      margin: 0;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    /* ---------------------------------- Reset --------------------------------- */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin-top: 0;
      margin-bottom: 0;
    }

    address {
      font-style: normal;
    }

    button {
      cursor: pointer;
      color: inherit;
      border: none;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .link {
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .tmp {
      background-color: #f3f6f9;
    }
  `;
}
