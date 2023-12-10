import * as React from "react";
const SvgSimCard = ({ title, titleId, ...props }) => (
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
      d='M17 3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5h10a3.5 3.5 0 0 0 3.5-3.5V7A3.5 3.5 0 0 0 17 3.5Zm-6.5 2h3v3h-3v-3Zm-2 13H7A1.5 1.5 0 0 1 5.5 17v-1.5h3v3Zm5 0h-3v-3h3v3Zm5-1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5v-3h3V17Zm0-3.5h-13V7A1.5 1.5 0 0 1 7 5.5h1.5v4a1 1 0 0 0 1 1h9v3Zm0-5h-3v-3H17A1.5 1.5 0 0 1 18.5 7v1.5Z'
    />
  </svg>
);
export default SvgSimCard;
