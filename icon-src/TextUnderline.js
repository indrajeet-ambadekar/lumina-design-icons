import * as React from "react";
const SvgTextUnderline = ({ title, titleId, ...props }) => (
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
      d='M12 15.5a5 5 0 0 0 5-5v-5a1 1 0 0 0-2 0v5a3 3 0 0 1-6 0v-5a1 1 0 0 0-2 0v5a5 5 0 0 0 5 5m5 2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgTextUnderline;
