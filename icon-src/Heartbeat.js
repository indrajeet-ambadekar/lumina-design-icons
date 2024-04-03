import * as React from "react";
const SvgHeartbeat = ({ title, titleId, ...props }) => (
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
      d='M21 10.41h-2.5a1 1 0 0 0-.71.3L16.55 12l-2.8-3.19a1 1 0 0 0-1.46 0l-1.7 1.7H9a1 1 0 0 0 0 2h2a1 1 0 0 0 .71-.29L13 10.88l2.8 3.19a1 1 0 0 0 .72.34 1 1 0 0 0 .71-.29l1.7-1.71H21a1 1 0 0 0 0-2m-7.39 5.3-1.9 1.9a1 1 0 0 1-1.42 0L5.08 12.4a3.69 3.69 0 0 1 0-5.22 3.69 3.69 0 0 1 5.21 0 1 1 0 0 0 1.42 0 3.78 3.78 0 0 1 5.21 0q.336.34.58.75a1 1 0 0 0 1.72-1 6 6 0 0 0-.88-1.13A5.68 5.68 0 0 0 11 5.17a5.68 5.68 0 0 0-8.566 6.788A5.6 5.6 0 0 0 3.67 13.79L8.88 19a3 3 0 0 0 4.24 0L15 17.12a1 1 0 0 0 0-1.41 1 1 0 0 0-1.39 0'
    />
  </svg>
);
export default SvgHeartbeat;
