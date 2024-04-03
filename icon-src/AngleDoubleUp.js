import * as React from "react";
const SvgAngleDoubleUp = ({ title, titleId, ...props }) => (
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
      d='M12.71 12.54a1 1 0 0 0-1.42 0l-3 3A1.018 1.018 0 1 0 9.71 17L12 14.66 14.29 17a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-3-1.08L12 9.16l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0l-3 3a1.004 1.004 0 1 0 1.42 1.42'
    />
  </svg>
);
export default SvgAngleDoubleUp;
