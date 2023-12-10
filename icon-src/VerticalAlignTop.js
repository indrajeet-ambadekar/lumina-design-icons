import * as React from "react";
const SvgVerticalAlignTop = ({ title, titleId, ...props }) => (
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
      d='M21 2H3a1 1 0 0 0 0 2h3v17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5h3a1 1 0 0 0 1-1V4h3a1 1 0 1 0 0-2Zm-9 18H8V4h4v16Zm4-6h-2V4h2v10Z'
    />
  </svg>
);
export default SvgVerticalAlignTop;
