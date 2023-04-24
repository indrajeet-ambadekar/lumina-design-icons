import * as React from "react";
const SvgIconVuejs = ({ title, titleId, ...props }) => (
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
      d='M18.031 2.443h-3.643L12.013 6.4 9.63 2.444l-2.646-.001H.832L12.03 21.558 23.168 2.443H18.03Zm-6.006 15.15L4.322 4.443h2.824l4.885 8.406 4.847-8.407h2.81l-7.663 13.15Z'
    />
  </svg>
);
export default SvgIconVuejs;
