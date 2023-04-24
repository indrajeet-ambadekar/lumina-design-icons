import * as React from "react";
const SvgIconWaterGlass = ({ title, titleId, ...props }) => (
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
      d='M18.08 7a1 1 0 0 0-1.08.92l-.35 4.55a2.67 2.67 0 0 1-1.2-.77 1 1 0 0 0-1.5 0 2.649 2.649 0 0 1-3.9 0 1 1 0 0 0-1.5 0 2.7 2.7 0 0 1-1.2.77L7 7.92a1 1 0 0 0-1.457-.814A1 1 0 0 0 5 8.08l.86 11.15a3 3 0 0 0 3 2.77h6.3a3 3 0 0 0 3-2.77L19 8.08A.998.998 0 0 0 18.08 7Zm-1.94 12.08a1 1 0 0 1-1 .92H8.85a1 1 0 0 1-1-.92L7.5 14.5a4.77 4.77 0 0 0 1.8-.79 4.66 4.66 0 0 0 5.4 0 4.77 4.77 0 0 0 1.8.79l-.36 4.58ZM12 10a3.26 3.26 0 0 0 3.25-3.25c0-2.75-2.58-4.51-2.69-4.58a1 1 0 0 0-1.12 0c-.11.08-2.69 1.83-2.69 4.58A3.26 3.26 0 0 0 12 10Zm0-5.7a3.61 3.61 0 0 1 1.25 2.45 1.25 1.25 0 0 1-2.5 0A3.66 3.66 0 0 1 12 4.3Z'
    />
  </svg>
);
export default SvgIconWaterGlass;
