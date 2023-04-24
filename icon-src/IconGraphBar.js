import * as React from "react";
const SvgIconGraphBar = ({ title, titleId, ...props }) => (
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
      d='M6 13H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8H3v-6h2v6ZM22 9h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Zm-1 12h-2V11h2v10ZM14 1h-4a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm-1 20h-2V3h2v18Z'
    />
  </svg>
);
export default SvgIconGraphBar;
