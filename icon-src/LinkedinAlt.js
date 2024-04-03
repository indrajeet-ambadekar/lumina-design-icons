import * as React from "react";
const SvgLinkedinAlt = ({ title, titleId, ...props }) => (
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
      d='M17.5 8.999c-.895 0-1.776.221-2.565.644A1 1 0 0 0 14 9h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.506 5.506 0 0 0-5.5-5.5m3.5 12h-2v-4.5a3 3 0 0 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625 3.482 3.482 0 0 1 6.22 2.172zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1m-1 12H4v-10h2zM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.029a3.233 3.233 0 1 0 .028-6.457m-.028 4.457h-.029A1.222 1.222 0 0 1 3.59 4.77c0-.746.56-1.228 1.426-1.228A1.234 1.234 0 0 1 6.41 4.77C6.411 5.517 5.851 6 4.987 6'
    />
  </svg>
);
export default SvgLinkedinAlt;
