import * as React from "react";
const SvgHeartBreak = ({ title, titleId, ...props }) => (
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
      d='M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.46a1.002 1.002 0 0 0 1.42 0l7.45-7.46a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 0 1 5.54-6.45l-1.71 4a1 1 0 0 0 0 .83 1 1 0 0 0 .65.53l2.77.7-1.4 2.89A.999.999 0 0 0 12 16a1 1 0 0 0 .9-.56l2-4a1 1 0 0 0-.276-1.207 1.051 1.051 0 0 0-.394-.203l-2.83-.71 1.45-3.39a4.26 4.26 0 1 1 5.92 6.13h-.02Z'
    />
  </svg>
);
export default SvgHeartBreak;
