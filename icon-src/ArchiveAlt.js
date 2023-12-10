import * as React from "react";
const SvgArchiveAlt = ({ title, titleId, ...props }) => (
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
      d='M10 13h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Zm9-10H5a3 3 0 0 0-1 5.82V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.82A3 3 0 0 0 19 3Zm-1 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12v9Zm1-11H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z'
    />
  </svg>
);
export default SvgArchiveAlt;
