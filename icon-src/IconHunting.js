import * as React from "react";
const SvgIconHunting = ({ title, titleId, ...props }) => (
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
      d='M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm9-2h-1.07A8 8 0 0 0 13 4.07V3a1 1 0 0 0-2 0v1.07A8 8 0 0 0 4.07 11H3a1 1 0 0 0 0 2h1.07A8 8 0 0 0 11 19.93V21a1 1 0 0 0 2 0v-1.07A8 8 0 0 0 19.93 13H21a1 1 0 0 0 0-2Zm-9 7a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z'
    />
  </svg>
);
export default SvgIconHunting;
