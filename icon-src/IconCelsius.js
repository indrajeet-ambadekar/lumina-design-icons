import * as React from "react";
const SvgIconCelsius = ({ title, titleId, ...props }) => (
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
      d='M21 19h-6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h6a1 1 0 1 0 0-2h-6a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h6a1 1 0 0 0 0-2ZM5 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
    />
  </svg>
);
export default SvgIconCelsius;
