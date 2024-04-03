import * as React from "react";
const SvgAngleDoubleRight = ({ title, titleId, ...props }) => (
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
      d='M8.46 8.29A1.018 1.018 0 0 0 7 9.71L9.34 12 7 14.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a1 1 0 0 0 0-1.42zm8.5 3-3-3a1.004 1.004 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a1 1 0 0 0 .04-1.42z'
    />
  </svg>
);
export default SvgAngleDoubleRight;
