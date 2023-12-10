import * as React from "react";
const SvgLoader = ({ title, titleId, ...props }) => (
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
      d='M12 18v4M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M18 12h4M2 12h4M16.24 7.76l2.83-2.83M4.93 4.93l2.83 2.83M12 2v4'
    />
  </svg>
);
export default SvgLoader;
