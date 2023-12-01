import * as React from "react";
const SvgIconOctagonLean = ({ title, titleId, ...props }) => (
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
      d='m21.71 7.57-5.27-5.28a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.57a1 1 0 0 0-.29.7v7.46a1 1 0 0 0 .29.7l5.27 5.28c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.28a1 1 0 0 0 .29-.7V8.27a1 1 0 0 0-.29-.7ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z'
    />
  </svg>
);
export default SvgIconOctagonLean;
