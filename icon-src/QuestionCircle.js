import * as React from "react";
const SvgQuestionCircle = ({ title, titleId, ...props }) => (
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
      d='M11.29 15.29a2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2.84.84 0 0 0 .08.38.9.9 0 0 0 .54.54.94.94 0 0 0 .76 0 .9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-1.71-.71M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 1 1 0 2 1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7'
    />
  </svg>
);
export default SvgQuestionCircle;
