import * as React from "react";
const SvgLayersFlat = ({ title, titleId, ...props }) => (
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
      d='m2.5 10.56 9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73ZM12 5.65l7 4-7 4.05-7-4.01 7-4.04Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 1 0-1 1.73l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 1 0-1-1.73Z'
    />
  </svg>
);
export default SvgLayersFlat;
