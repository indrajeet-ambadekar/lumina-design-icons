import * as React from "react";
const SvgIconAdjust = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 17.93a8 8 0 0 1 0-15.86v15.86Zm2 0V4.07a8 8 0 0 1 0 15.86Z'
    />
  </svg>
);
export default SvgIconAdjust;
