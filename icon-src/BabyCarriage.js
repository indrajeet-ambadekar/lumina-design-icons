import * as React from "react";
const SvgBabyCarriage = ({ title, titleId, ...props }) => (
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
      d='M19 16a3 3 0 1 0 0 5.999A3 3 0 0 0 19 16m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M9 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M22 8.5A6.51 6.51 0 0 0 15.5 2H15a1 1 0 0 0-1 1v5H7.52L6.27 4.65A1 1 0 0 0 5.33 4H3a1 1 0 0 0 0 2h1.64l1.25 3.37.51 1.37v.09A6.44 6.44 0 0 0 12.5 15h3A6.49 6.49 0 0 0 22 8.5m-3.32 3.18A4.47 4.47 0 0 1 15.5 13h-3a4.47 4.47 0 0 1-4.16-2.8.14.14 0 0 1 0-.06L8.26 10h11.48a4.3 4.3 0 0 1-1.06 1.68M16 8V4a4.49 4.49 0 0 1 4 4z'
    />
  </svg>
);
export default SvgBabyCarriage;
