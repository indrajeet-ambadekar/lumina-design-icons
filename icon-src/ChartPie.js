import * as React from "react";
const SvgChartPie = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 4.93 18.69H17.05A10 10 0 0 0 12 2Zm1 2.07A8 8 0 0 1 19.93 11H13V4.07ZM12 20a8 8 0 0 1-1-15.93V12c.004.12.028.238.07.35V12.5l4 6.87c-.97.415-2.015.63-3.07.63Zm4.83-1.64L13.73 13h6.2a7.999 7.999 0 0 1-3.1 5.36Z'
    />
  </svg>
);
export default SvgChartPie;
