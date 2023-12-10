import * as React from "react";
const SvgCardAtm = ({ title, titleId, ...props }) => (
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
      d='M19 4.5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm1 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9Zm-4-6a3 3 0 0 0-1.51.42 3 3 0 1 0 0 5.16A3 3 0 1 0 16 10.5Zm-2.83 4a1.005 1.005 0 0 1-.17 0 1 1 0 0 1 0-2c.057-.005.113-.005.17 0a2.8 2.8 0 0 0 0 1.92v.08Zm2.83 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
    />
  </svg>
);
export default SvgCardAtm;
