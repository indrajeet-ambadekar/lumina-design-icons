import * as React from "react";
const SvgSignal = ({ title, titleId, ...props }) => (
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
      d='M6 15a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm4-3a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1Zm8-8a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1Zm-4 4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z'
    />
  </svg>
);
export default SvgSignal;
