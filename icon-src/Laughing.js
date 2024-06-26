import * as React from "react";
const SvgLaughing = ({ title, titleId, ...props }) => (
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
      d='M14.16 12.21a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71l-.79-.79.79-.79a1.005 1.005 0 0 0-.71-1.714 1 1 0 0 0-.71.294l-1.5 1.5a1 1 0 0 0 0 1.42zm-5.08 0 1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1.004 1.004 0 1 0-1.42 1.42l.8.79-.8.79a1.001 1.001 0 0 0 1.094 1.636 1 1 0 0 0 .326-.216m5.28 2a3.76 3.76 0 0 1-4.72 0 1.001 1.001 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1.001 1.001 0 0 0-1.28-1.54M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20'
    />
  </svg>
);
export default SvgLaughing;
