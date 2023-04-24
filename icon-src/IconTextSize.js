import * as React from "react";
const SvgIconTextSize = ({ title, titleId, ...props }) => (
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
      d='M9 11H3a1 1 0 0 0 0 2h2v5a1 1 0 1 0 2 0v-5h2a1 1 0 0 0 0-2Zm12-6H9a1 1 0 0 0 0 2h5v11a1 1 0 0 0 2 0V7h5a1 1 0 1 0 0-2Z'
    />
  </svg>
);
export default SvgIconTextSize;
