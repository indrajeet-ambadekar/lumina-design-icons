import * as React from "react";
const SvgIconCloudMoon = ({ title, titleId, ...props }) => (
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
      d='M21.7 9.07a1 1 0 0 0-.93-.26 3.13 3.13 0 0 1-.66.08 3 3 0 0 1-3-3c.003-.222.03-.443.08-.66a1 1 0 0 0-.26-.93A1 1 0 0 0 16 4a4.93 4.93 0 0 0-3.83 4.21A6.24 6.24 0 0 0 10.5 8a6 6 0 0 0-5.94 5.13A3.5 3.5 0 0 0 5.5 20h9.17A4.33 4.33 0 0 0 19 15.67a4.23 4.23 0 0 0-.49-2A4.94 4.94 0 0 0 22 10a1 1 0 0 0-.3-.93Zm-7 8.93H5.5a1.5 1.5 0 0 1 0-3 1 1 0 0 0 1-1 4 4 0 0 1 6.18-3.34 3.94 3.94 0 0 1 1.57 2 1 1 0 0 0 .78.67 2.34 2.34 0 0 1 1.344 4.113A2.34 2.34 0 0 1 14.67 18h.03Zm2.44-6.11c-.14.011-.28.011-.42 0a4.594 4.594 0 0 0-.72-.31 6.061 6.061 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28 5 5 0 0 0 4.23 4.23 3 3 0 0 1-2.35 1.01h.03Z'
    />
  </svg>
);
export default SvgIconCloudMoon;
