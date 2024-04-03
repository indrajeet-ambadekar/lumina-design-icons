import * as React from "react";
const SvgDirections = ({ title, titleId, ...props }) => (
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
      d='m21.12 9.88-7-7a3.08 3.08 0 0 0-4.24 0l-7 7a3 3 0 0 0 0 4.24l7 7a3 3 0 0 0 4.24 0l7-7a3 3 0 0 0 0-4.24m-1.41 2.83-7 7a1 1 0 0 1-1.42 0l-7-7a1 1 0 0 1 0-1.42l7-7a1 1 0 0 1 1.42 0l7 7a1 1 0 0 1 0 1.42m-5.5-3.42a1.004 1.004 0 0 0-1.42 1.42l.3.29H9.5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1h2.59l-.3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2-2a1 1 0 0 0 0-1.42z'
    />
  </svg>
);
export default SvgDirections;
