import * as React from "react";
const SvgTagAlt = ({ title, titleId, ...props }) => (
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
      d='M7.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13.62 4.71-8.41-8.42A.999.999 0 0 0 12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L21.12 15a3 3 0 0 0 0-4.24v-.05Zm-1.41 2.82-6.18 6.17a1 1 0 0 1-1.41 0L4 11.59V4h7.59l8.12 8.12a1.001 1.001 0 0 1 0 1.41Z'
    />
  </svg>
);
export default SvgTagAlt;
