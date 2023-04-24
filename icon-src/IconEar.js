import * as React from "react";
const SvgIconEar = ({ title, titleId, ...props }) => (
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
      d='M12 8a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 1 0-5.018 2.22c.01.01.162.17.194.215a.988.988 0 0 1 0 1.12.999.999 0 1 0 1.648 1.13 2.983 2.983 0 0 0-.005-3.388 7.107 7.107 0 0 0-.49-.557A1 1 0 0 1 12 8Zm0-6a7 7 0 0 0-6.762 8.812 1 1 0 0 0 1.932-.518A5 5 0 1 1 17 9a5.114 5.114 0 0 1-.705 2.567L12.73 19A2.006 2.006 0 0 1 11 20a2.027 2.027 0 0 1-2-2c0-.35.093-.695.269-.999a1 1 0 1 0-1.733-1.002 3.999 3.999 0 1 0 6.963 3.934l3.563-7.433A7 7 0 0 0 12 2Z'
    />
  </svg>
);
export default SvgIconEar;
