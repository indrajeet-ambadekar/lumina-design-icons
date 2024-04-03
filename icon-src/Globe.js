import * as React from "react";
const SvgGlobe = ({ title, titleId, ...props }) => (
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
      d='M21.41 8.64v-.05a10 10 0 0 0-18.78 0v.05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0v-.05a9.86 9.86 0 0 0 0-6.72M4.26 14a7.8 7.8 0 0 1 0-4h1.86a16.7 16.7 0 0 0 0 4zm.82 2h1.4c.235.892.57 1.754 1 2.57A8 8 0 0 1 5.08 16m1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12 12 0 0 0 6.48 8M11 19.7A6.34 6.34 0 0 1 8.57 16H11zm0-5.7H8.14a14.4 14.4 0 0 1 0-4H11zm0-6H8.57A6.34 6.34 0 0 1 11 4.3zm7.92 0h-1.4a12 12 0 0 0-1-2.57A8 8 0 0 1 18.92 8M13 4.3A6.34 6.34 0 0 1 15.43 8H13zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7m2.86-5.7H13v-4h2.86a14.4 14.4 0 0 1 0 4m.69 4.57c.43-.816.765-1.678 1-2.57h1.4a8 8 0 0 1-2.4 2.57M19.74 14h-1.86q.123-.997.12-2a16 16 0 0 0-.12-2h1.86a7.8 7.8 0 0 1 0 4'
    />
  </svg>
);
export default SvgGlobe;
