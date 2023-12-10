import * as React from "react";
const SvgCalendarSlash = ({ title, titleId, ...props }) => (
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
      d='M11.66 7H15v1a1 1 0 1 0 2 0V7h1a1 1 0 0 1 1 1v3h-1.34a1 1 0 0 0 0 2H19v1.34a1 1 0 1 0 2 0V8a3 3 0 0 0-3-3h-1V4a1 1 0 0 0-2 0v1h-3.34a1 1 0 1 0 0 2Zm10.05 13.29-1.6-1.6-16.4-16.4a1.004 1.004 0 1 0-1.42 1.42l1.91 1.9A3 3 0 0 0 3 8v10a3 3 0 0 0 3 3h12a2.999 2.999 0 0 0 1.29-.3l1 1a.997.997 0 0 0 1.095.219.999.999 0 0 0 .616-.924 1 1 0 0 0-.29-.705ZM5 8a1 1 0 0 1 .66-.93L9.59 11H5V8Zm1 11a1 1 0 0 1-1-1v-5h6.59l6 6H6Z'
    />
  </svg>
);
export default SvgCalendarSlash;
