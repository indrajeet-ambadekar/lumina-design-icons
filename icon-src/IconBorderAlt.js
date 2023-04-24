import * as React from "react";
const SvgIconBorderAlt = ({ title, titleId, ...props }) => (
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
      d='M11.5 18.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9-15a1 1 0 0 0-1-1h-16a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-15h15a1 1 0 0 0 1-1Zm-5 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconBorderAlt;
