import * as React from "react";
const SvgIconOpera = ({ title, titleId, ...props }) => (
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
      d='M11.996 2c-5.462 0-9.278 3.958-9.278 9.899C2.718 17.189 6.43 22 12.004 22c5.566 0 9.278-4.819 9.278-10.101 0-5.94-3.824-9.899-9.286-9.899Zm0 18.384c-3.397 0-3.77-5.013-3.77-8.71V11.6c0-3.996.598-8.23 3.748-8.23 3.15 0 3.786 4.361 3.786 8.357 0 3.696-.367 8.657-3.764 8.657Z'
    />
  </svg>
);
export default SvgIconOpera;
