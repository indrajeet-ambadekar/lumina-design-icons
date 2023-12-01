import * as React from "react";
const SvgIconParagraph = ({ title, titleId, ...props }) => (
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
      d='M13 13.5H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm8-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconParagraph;
