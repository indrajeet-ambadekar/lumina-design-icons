import * as React from "react";
const SvgHeartAlt = ({ title, titleId, ...props }) => (
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
      d='M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87m-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3 4.25 4.25 0 0 1 3 1.25 1 1 0 0 0 1.42 0 4.27 4.27 0 0 1 6 6.05z'
    />
  </svg>
);
export default SvgHeartAlt;
