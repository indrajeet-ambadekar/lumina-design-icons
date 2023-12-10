import * as React from "react";
const SvgExposureIncrease = ({ title, titleId, ...props }) => (
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
      d='M11 7h-1V6a1 1 0 0 0-2 0v1H7a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2Zm2 11h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Zm6-16H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM4 18.59V5a1 1 0 0 1 1-1h13.59L4 18.59ZM20 19a1 1 0 0 1-1 1H5.41L20 5.41V19Z'
    />
  </svg>
);
export default SvgExposureIncrease;
