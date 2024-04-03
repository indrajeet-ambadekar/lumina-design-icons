import * as React from "react";
const SvgClockTen = ({ title, titleId, ...props }) => (
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
      d='M11 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0-14a1 1 0 0 0-1 1v3.27l-1.1-.64a1.003 1.003 0 1 0-1 1.74l2.6 1.5h.16A1 1 0 0 0 11 13a1 1 0 0 0 .34-.07h.08a.9.9 0 0 0 .28-.19 1.6 1.6 0 0 0 .15-.19v-.06q.037-.088.06-.18a1.4 1.4 0 0 0 0-.2V7A1 1 0 0 0 11 6'
    />
  </svg>
);
export default SvgClockTen;
