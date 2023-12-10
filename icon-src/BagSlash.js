import * as React from "react";
const SvgBagSlash = ({ title, titleId, ...props }) => (
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
      d='M19 6h-3V5a2 2 0 0 0-2-2h-4a1.86 1.86 0 0 0-.61.1 1 1 0 0 0-.64 1.27A1 1 0 0 0 10 5h4v1h-1.34a1 1 0 1 0 0 2H19a1 1 0 0 1 1 1v1.28l-2.57.86a1 1 0 0 0-.264 1.763 1 1 0 0 0 .584.187 1.19 1.19 0 0 0 .32-.05l1.93-.65v2.95a1 1 0 1 0 2 0V9a3 3 0 0 0-3-3ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v9a3 3 0 0 0 3 3h14c.178-.005.356-.025.53-.06l.76.77a1 1 0 0 0 1.42 0 1.002 1.002 0 0 0 0-1.42l-18-18ZM4 9a1 1 0 0 1 1-1h1.59l4 4H9.16L4 10.28V9Zm1 10a1 1 0 0 1-1-1v-5.61L8.68 14c.106.014.214.014.32 0h3.59l5 5H5Z'
    />
  </svg>
);
export default SvgBagSlash;
