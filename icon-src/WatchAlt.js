import * as React from "react";
const SvgWatchAlt = ({ title, titleId, ...props }) => (
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
      d='m17 8.61-1-5.77A1 1 0 0 0 15 2H9a1 1 0 0 0-1 .84L7 8.61a6 6 0 0 0 0 6.78l1 5.77A1 1 0 0 0 9 22h6a1 1 0 0 0 1-.84l1-5.77a6 6 0 0 0 0-6.78M9.85 4h4.3l.44 2.59a6 6 0 0 0-5.18 0zm4.3 16h-4.3l-.44-2.59a6 6 0 0 0 5.18 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8'
    />
  </svg>
);
export default SvgWatchAlt;
