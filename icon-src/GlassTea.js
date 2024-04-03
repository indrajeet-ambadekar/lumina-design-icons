import * as React from "react";
const SvgGlassTea = ({ title, titleId, ...props }) => (
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
      d='M19 3a3 3 0 0 0-2.23-1H7.23a3 3 0 0 0-3 3.33l1.56 14a3 3 0 0 0 3 2.67h6.42a3 3 0 0 0 3-2.67l1.56-14A3 3 0 0 0 19 3m-2.8 16.11a1 1 0 0 1-1 .89H8.79a1 1 0 0 1-1-.89L6.78 10h10.44zM17.44 8H6.56l-.32-2.89A1 1 0 0 1 7.23 4h9.54a1 1 0 0 1 .99 1.11zM14 18a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1'
    />
  </svg>
);
export default SvgGlassTea;
