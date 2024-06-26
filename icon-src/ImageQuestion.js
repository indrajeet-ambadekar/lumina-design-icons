import * as React from "react";
const SvgImageQuestion = ({ title, titleId, ...props }) => (
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
      d='M19 13a1 1 0 0 0-1 1v.39l-1.48-1.48a2.77 2.77 0 0 0-3.93 0l-.7.7-2.48-2.49a2.86 2.86 0 0 0-3.93 0L4 12.6V7a1 1 0 0 1 1-1h8a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1v-3.57l2.9-2.9a.79.79 0 0 1 1.09 0l3.17 3.17 4.29 4.3zm13-1a1 1 0 0 1-.18.53L13.31 15l.7-.7a.78.78 0 0 1 1.1 0L18 17.22zm1-17a3 3 0 0 0-2.6 1.5 1 1 0 0 0 1.126 1.465 1 1 0 0 0 .604-.465A1 1 0 0 1 20 5a1 1 0 0 1-1 1 1 1 0 1 0 0 2 3 3 0 0 0 0-6m.38 7.08A1 1 0 0 0 18.8 9l-.18.06-.18.09-.15.13A1 1 0 0 0 18 10a1 1 0 1 0 1.38-.92'
    />
  </svg>
);
export default SvgImageQuestion;
