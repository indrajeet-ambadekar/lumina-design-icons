import * as React from "react";
const SvgIconLamp = ({ title, titleId, ...props }) => (
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
      d='M18 2.78A1 1 0 0 0 17 2H7a1 1 0 0 0-1 .78l-2 9A1 1 0 0 0 5 13h3.94a8.92 8.92 0 0 1-2.51 7.3 1 1 0 0 0 .71 1.7h9.72a1 1 0 0 0 .71-1.7 8.92 8.92 0 0 1-2.51-7.3H16v2a1 1 0 0 0 2 0v-2h1a1 1 0 0 0 .98-1.22l-1.98-9ZM9.22 20A10.9 10.9 0 0 0 11 14c0-.33 0-.67-.05-1h2.1c0 .33-.05.67-.05 1a10.901 10.901 0 0 0 1.78 6H9.22Zm-3-9L7.8 4h8.4l1.55 7H6.22Z'
    />
  </svg>
);
export default SvgIconLamp;
