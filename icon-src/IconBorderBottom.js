import * as React from "react";
const SvgIconBorderBottom = ({ title, titleId, ...props }) => (
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
      d='M12 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 10a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002Zm0-4a1 1 0 1 0 0 2.002 1 1 0 0 0 0-2.002Zm0 8H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm0-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-16 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
    />
  </svg>
);
export default SvgIconBorderBottom;
