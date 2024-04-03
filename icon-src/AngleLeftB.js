import * as React from "react";
const SvgAngleLeftB = ({ title, titleId, ...props }) => (
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
      d='m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0s.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6q0-.15 0 0'
    />
  </svg>
);
export default SvgAngleLeftB;
