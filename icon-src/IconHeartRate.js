import * as React from "react";
const SvgIconHeartRate = ({ title, titleId, ...props }) => (
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
      d='M21 11h-3.94a.777.777 0 0 0-.21 0h-.17c-.052.03-.102.063-.15.1-.056.037-.11.077-.16.12a1 1 0 0 0-.09.13 1.32 1.32 0 0 0-.12.2l-1.6 4.41-4.17-11.3a1 1 0 0 0-1.88 0L6.2 11H3a1 1 0 0 0 0 2H7.3a.862.862 0 0 0 .16-.1 1.67 1.67 0 0 0 .16-.12l.09-.13c.048-.062.088-.129.12-.2l1.62-4.53 4.16 11.42a1 1 0 0 0 1.88 0l2.3-6.34H21a1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconHeartRate;
