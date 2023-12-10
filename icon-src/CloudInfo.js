import * as React from "react";
const SvgCloudInfo = ({ title, titleId, ...props }) => (
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
      d='M11.29 12.29A1 1 0 0 0 12 14h.19c.066-.01.13-.03.19-.06a.559.559 0 0 0 .17-.09l.15-.12a.999.999 0 0 0 0-1.42 1 1 0 0 0-1.41-.02ZM12 15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Zm6.42-6.78a7 7 0 0 0-13.36 1.89A4 4 0 0 0 6 18h2a1 1 0 0 0 0-2H6a2 2 0 1 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67A3 3 0 0 1 20 13a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 1.42-9.78Z'
    />
  </svg>
);
export default SvgCloudInfo;
