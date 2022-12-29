import { css } from '@emotion/react'

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    appearance: none;
    outline: none;
  }

  a,
  button,
  svg {
    cursor: pointer;
  }

  address {
    font-style: normal;
  }

  ul,
  ol,
  li {
    list-style: none;
  }
`

export const globalStyle = css`
  ${reset}

  html,
  body {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    -webkit-font-smoothing: antialiased;
  }

  #__next {
    height: 100%;
  }
`
