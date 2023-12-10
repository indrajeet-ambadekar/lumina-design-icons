import * as React from "react";
const SvgColumns = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 3v18m0-18h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7V3Zm0 0H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7V3Z'
    />
  </svg>
);
export default SvgColumns;
