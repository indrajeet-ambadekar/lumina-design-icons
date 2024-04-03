import * as React from "react";
const SvgClockTwo = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m2.1-10.37-1.1.64V7a1 1 0 0 0-2 0v5.06a1.4 1.4 0 0 0 0 .2q.023.092.06.18v.06q.072.106.16.2a.9.9 0 0 0 .28.19h.08A1 1 0 0 0 12 13a1 1 0 0 0 .34-.07h.16l2.6-1.5a1.003 1.003 0 1 0-1-1.74z'
    />
  </svg>
);
export default SvgClockTwo;
