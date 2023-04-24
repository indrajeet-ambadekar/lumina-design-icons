import * as React from "react";
const SvgIconBag = ({ title, titleId, ...props }) => (
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
      d='M19 6h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-9-1h4v1h-4V5Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5.61L8.68 14c.106.014.214.014.32 0h6a1.19 1.19 0 0 0 .32-.05L20 12.39V18Zm0-7.72L14.84 12H9.16L4 10.28V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1.28Z'
    />
  </svg>
);
export default SvgIconBag;
