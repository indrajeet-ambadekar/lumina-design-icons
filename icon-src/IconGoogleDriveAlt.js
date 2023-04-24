import * as React from "react";
const SvgIconGoogleDriveAlt = ({ title, titleId, ...props }) => (
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
      d='M22 14.44a.614.614 0 0 0 0-.13.617.617 0 0 1 0-.12l-.05-.12-6-10.29a1 1 0 0 0-.95-.49H9a1 1 0 0 0-.5.13l-.11.08a.73.73 0 0 0-.09.08.58.58 0 0 0-.1.12l-.06.08-6 10.33a1 1 0 0 0 0 1l3 5.08c.03.054.068.104.11.15v.06c.124.12.275.21.44.26.073.01.147.01.22 0H18a1 1 0 0 0 .86-.49l3-5.14.05-.12a.617.617 0 0 1 0-.12.524.524 0 0 0 0-.13.505.505 0 0 0 0-.13.585.585 0 0 0 .09-.09ZM6 17.73l-1.79-3.1L9 6.27l.87 1.5 1 1.66L7 15.91l-1 1.82Zm6-6.32 1.26 2.16h-2.54L12 11.41Zm5.43 7.3H7.7l1.84-3.14h9.72l-1.83 3.14Zm-1.86-5.14-4.83-8.28h3.69l4.83 8.28h-3.69Z'
    />
  </svg>
);
export default SvgIconGoogleDriveAlt;
