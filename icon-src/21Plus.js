import * as React from "react";
const Svg21Plus = ({ title, titleId, ...props }) => (
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
      d='M17 18a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1m1-13h1v1a1 1 0 0 0 2 0V5h1a1 1 0 1 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2m3.6 4a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1.02 1.02 0 0 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 10.78 8.8A1 1 0 0 0 21.6 9M10 13h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H9v-2a1 1 0 0 1 1-1'
    />
  </svg>
);
export default Svg21Plus;