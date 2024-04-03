import * as React from "react";
const SvgBorderBottom = ({ title, titleId, ...props }) => (
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
      d='M12 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m12-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 10a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002m0-4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002m0 8H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-16 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-12a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
    />
  </svg>
);
export default SvgBorderBottom;
