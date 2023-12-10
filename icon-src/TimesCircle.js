import * as React from "react";
const SvgTimesCircle = ({ title, titleId, ...props }) => (
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
      d='M15.71 8.29a.999.999 0 0 0-1.42 0L12 10.59l-2.29-2.3a1.004 1.004 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a.999.999 0 0 0 0 1.42 1.001 1.001 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L13.41 12l2.3-2.29a.998.998 0 0 0 0-1.42Zm3.36-3.36A10 10 0 1 0 4.93 19.07 10 10 0 1 0 19.07 4.93Zm-1.41 12.73A8 8 0 1 1 20 12a7.95 7.95 0 0 1-2.34 5.66Z'
    />
  </svg>
);
export default SvgTimesCircle;
