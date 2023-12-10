import * as React from "react";
const SvgAirplayAlt = ({ title, titleId, ...props }) => (
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
      d='M12.83 13.45a1 1 0 0 0-1.66 0l-4 6a1 1 0 0 0 0 1A1 1 0 0 0 8 21h8a1 1 0 0 0 .88-.53 1 1 0 0 0-.05-1l-4-6.02ZM9.87 19 12 15.8l2.13 3.2H9.87ZM19 3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.85a1 1 0 0 0 0-2H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-.85a1 1 0 0 0 0 2H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z'
    />
  </svg>
);
export default SvgAirplayAlt;
