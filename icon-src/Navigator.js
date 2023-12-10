import * as React from "react";
const SvgNavigator = ({ title, titleId, ...props }) => (
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
      d='m20.17 9.23-14-5.78a3 3 0 0 0-4 3.7L3.71 12l-1.58 4.85A3 3 0 0 0 2.94 20a3 3 0 0 0 2 .8c.395 0 .786-.078 1.15-.23l14.05-5.78a3 3 0 0 0 0-5.54l.03-.02ZM5.36 18.7a1 1 0 0 1-1.06-.19 1 1 0 0 1-.27-1L5.49 13h13.73L5.36 18.7Zm.13-7.7L4 6.53a1 1 0 0 1 .27-1 1 1 0 0 1 1.12-.23L19.22 11H5.49Z'
    />
  </svg>
);
export default SvgNavigator;
