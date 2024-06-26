import * as React from "react";
const SvgGoogleDrive = ({ title, titleId, ...props }) => (
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
      d='m21.423 13.888-6.09-10.55H8.668l6.09 10.55zM8.09 4.338 2 14.888l3.334 5.774 6.089-10.55zm1.733 10.55-3.333 5.774h12.178L22 14.887z'
    />
  </svg>
);
export default SvgGoogleDrive;
