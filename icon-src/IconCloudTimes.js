import * as React from "react";
const SvgIconCloudTimes = ({ title, titleId, ...props }) => (
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
      d='M18.42 8.22a7 7 0 0 0-13.36 1.89A4 4 0 0 0 6 18a1 1 0 1 0 0-2 2 2 0 1 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 .24 5.84 1.002 1.002 0 0 0 .5 1.94 5 5 0 0 0 .17-9.62Zm-3.71 6.07a1 1 0 0 0-1.42 0L12 15.59l-1.29-1.3a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29-1.3 1.29a1.001 1.001 0 0 0 .326 1.639 1 1 0 0 0 1.094-.219l1.29-1.3 1.29 1.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L13.41 17l1.3-1.29a.997.997 0 0 0 .219-1.095.999.999 0 0 0-.219-.325Z'
    />
  </svg>
);
export default SvgIconCloudTimes;
