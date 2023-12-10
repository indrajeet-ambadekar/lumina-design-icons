import * as React from "react";
const SvgWifiRouter = ({ title, titleId, ...props }) => (
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
      d='M8.9 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM15 8.5a1 1 0 0 1 1.73 0 1 1 0 0 0 1.36.37 1 1 0 0 0 .41-1.37 3 3 0 0 0-5.2 0 1 1 0 0 0 1.7 1Zm7-3a7 7 0 0 0-12.12 0A1 1 0 0 0 10.7 7a1 1 0 0 0 .87-.5 5 5 0 0 1 8.66 0 1 1 0 0 0 1.37.37A1 1 0 0 0 22 5.5ZM17.9 14h-1v-3a1 1 0 0 0-2 0v3h-10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Zm1 5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2Z'
    />
  </svg>
);
export default SvgWifiRouter;
