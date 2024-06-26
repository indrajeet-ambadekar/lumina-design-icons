import * as React from "react";
const SvgDesktopAltSlash = ({ title, titleId, ...props }) => (
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
      d='m21.71 20.29-18-18a1.004 1.004 0 0 0-1.42 1.42l1 1A3 3 0 0 0 3 6v8a3 3 0 0 0 3 3h3v2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 .93-.66l1.36 1.37a1 1 0 0 0 1.095.219 1 1 0 0 0 .325-.22 1 1 0 0 0 0-1.42M5 6.41 9.59 11H5zM13 19h-2v-2h2zm-7-4a1 1 0 0 1-1-1v-1h6.59l2 2zm9 4v-2h.59l2 2zM9.66 5H18a1 1 0 0 1 1 1v5h-1.34a1 1 0 0 0 0 2H19v1a.4.4 0 0 1 0 .11 1 1 0 0 0 .78 1.18h.2a1 1 0 0 0 1-.8q.032-.243.02-.49V6a3 3 0 0 0-3-3H9.66a1 1 0 1 0 0 2'
    />
  </svg>
);
export default SvgDesktopAltSlash;
