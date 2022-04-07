import { css } from '@emotion/react'

// eslint-disable-next-line no-unused-vars
const reboot = theme => css`
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    image-rendering: -webkit-optimize-contrast;
    @media only screen and (max-width: 768px) {
      image-rendering: unset;
    }
  }

  button,
  button:focus,
  input,
  input:focus,
  select,
  select:focus,
  textarea,
  textarea:focus {
    appearance: none;
    outline: none;
    border: none;
  }

  input[type='checkbox'],
  input[type='radio'] {
    outline: none;
    border: none;
  }

  input[type='checkbox'] {
    appearance: checkbox;
  }

  input[type='radio'] {
    appearance: radio;
  }

  button,
  select {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  li,
  ul {
    list-style-type: none;
  }

  body,
  html,
  #__next {
    min-height: 100%;
  }
`

export default reboot
