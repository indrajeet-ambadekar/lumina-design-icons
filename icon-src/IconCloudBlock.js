import * as React from "react";
const SvgIconCloudBlock = ({ title, titleId, ...props }) => (
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
      d='M18.42 7.72A7 7 0 0 0 5.06 9.61a4 4 0 0 0-.38 7.66c.103.032.211.049.32.05a1.013 1.013 0 1 0 .32-2A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1.003 1.003 0 1 0 1 1.74A5 5 0 0 0 22 12.5a5 5 0 0 0-3.58-4.78Zm-9.25 6a4 4 0 1 0 5.66 0 4.1 4.1 0 0 0-5.66-.05v.05ZM10 16.5a2 2 0 0 1 2-2c.172.002.343.026.51.07L10.07 17a2.087 2.087 0 0 1-.07-.5Zm3.41 1.41a2 2 0 0 1-1.91.5L13.93 16c.044.166.068.338.07.51a2 2 0 0 1-.59 1.4Z'
    />
  </svg>
);
export default SvgIconCloudBlock;
