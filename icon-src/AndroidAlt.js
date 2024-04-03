import * as React from "react";
const SvgAndroidAlt = ({ title, titleId, ...props }) => (
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
      d='M2.992 9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m18 0a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-4.135-5.5a1 1 0 1 0-1.731-1l-.614 1.063a5.93 5.93 0 0 0-5.04 0L8.857 2.5a1 1 0 1 0-1.731 1l.692 1.198A5.98 5.98 0 0 0 5.992 9v8a1 1 0 0 0 1 1h2v3a1 1 0 1 0 2 0v-3h2v3a1 1 0 1 0 2 0v-3h2a1 1 0 0 0 1-1V9a5.98 5.98 0 0 0-1.827-4.302zM15.992 16h-8v-5h8zm-8-7a4 4 0 0 1 8 0z'
    />
  </svg>
);
export default SvgAndroidAlt;
