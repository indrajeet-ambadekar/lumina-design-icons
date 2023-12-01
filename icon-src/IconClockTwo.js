import * as React from "react";
const SvgIconClockTwo = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm2.1-10.37-1.1.64V7a1 1 0 0 0-2 0v5.06a1.42 1.42 0 0 0 0 .2c.015.061.036.122.06.18v.06c.048.07.101.138.16.2a.92.92 0 0 0 .28.19h.08A1 1 0 0 0 12 13a.998.998 0 0 0 .34-.07h.16l2.6-1.5a1.003 1.003 0 1 0-1-1.74v-.06Z'
    />
  </svg>
);
export default SvgIconClockTwo;
