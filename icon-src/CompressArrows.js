import * as React from "react";
const SvgCompressArrows = ({ title, titleId, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#000'
      d='M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 1 0 2 0v-4a1 1 0 0 0-.08-.38 1 1 0 0 0-.54-.54M10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1.004 1.004 0 1 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1m3.62 5.92c.12.051.25.078.38.08h4a1 1 0 1 0 0-2h-1.59l5.3-5.29a1.004 1.004 0 1 0-1.42-1.42L15 7.59V6a1 1 0 1 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54M16.41 15H18a1 1 0 1 0 0-2h-4c-.13.002-.26.029-.38.08a1 1 0 0 0-.54.54c-.051.12-.079.25-.08.38v4a1 1 0 1 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 .219-1.095 1 1 0 0 0-.22-.325z'
    />
  </svg>
);
export default SvgCompressArrows;
