import * as React from "react";
const SvgArrowCircleLeft = ({ title, titleId, ...props }) => (
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
      d='M8.29 11.29a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l3 3a1.004 1.004 0 1 0 1.42-1.42L11.41 13H15a1 1 0 0 0 0-2h-3.59l1.3-1.29a1 1 0 0 0-.325-1.639 1 1 0 0 0-1.095.219l-3 3ZM2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Zm18 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z'
    />
  </svg>
);
export default SvgArrowCircleLeft;
