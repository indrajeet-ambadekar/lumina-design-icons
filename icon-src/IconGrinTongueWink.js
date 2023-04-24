import * as React from "react";
const SvgIconGrinTongueWink = ({ title, titleId, ...props }) => (
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
      d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm5.62-10.87a3.08 3.08 0 0 0-4.24 0 1 1 0 0 0 1.41 1.41 1.002 1.002 0 0 1 1.42 0 1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 2H9a1 1 0 0 0 0 2 3 3 0 0 0 6 0 1 1 0 0 0 0-2Zm-3 3a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1Z'
    />
  </svg>
);
export default SvgIconGrinTongueWink;
