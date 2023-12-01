import * as React from "react";
const SvgIconClockTen = ({ title, titleId, ...props }) => (
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
      d='M11 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-14a1 1 0 0 0-1 1v3.27l-1.1-.64a1.003 1.003 0 1 0-1 1.74l2.6 1.5h.16A1 1 0 0 0 11 13a.998.998 0 0 0 .34-.07h.08a.92.92 0 0 0 .28-.19 1.57 1.57 0 0 0 .15-.19v-.06c.024-.058.045-.119.06-.18a1.42 1.42 0 0 0 0-.2V7A1 1 0 0 0 11 6Z'
    />
  </svg>
);
export default SvgIconClockTen;
