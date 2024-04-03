import * as React from "react";
const SvgMapMarkerSlash = ({ title, titleId, ...props }) => (
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
      d='M10.63 5.49a6 6 0 0 1 7.21 7.2 1 1 0 0 0 .74 1.21q.115.015.23 0a1 1 0 0 0 1-.76 8 8 0 0 0-9.61-9.62 1.026 1.026 0 0 0 .46 2zm11.08 14.58-4.27-4.27L3.71 2.07a1 1 0 1 0-1.42 1.41L5.5 6.69A8 8 0 0 0 6.34 17l4.95 4.95a1 1 0 0 0 1.42 0l4-4 3.56 3.56a1 1 0 0 0 1.42-1.41zm-9.59-6.76a2 2 0 0 1-1.99-1.272 2 2 0 0 1-.13-.828zm-.12 6.5-4.24-4.24a6 6 0 0 1-.82-7.44L8.41 9.6a4 4 0 0 0 .76 4.55A4 4 0 0 0 12 15.33a3.9 3.9 0 0 0 1.73-.41l1.58 1.58z'
    />
  </svg>
);
export default SvgMapMarkerSlash;
