import * as React from "react";
const SvgIconAdjustHalf = ({ title, titleId, ...props }) => (
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
      d='M20.83 7.32a10.11 10.11 0 0 0-3.44-3.73A10 10 0 1 0 12 22h.29a10 10 0 0 0 8.54-14.68ZM11 19.93a8 8 0 0 1 0-15.86v15.86Zm2-15.86a8.07 8.07 0 0 1 2.49.74L13 9.12V4.07Zm0 9 4.17-7.17a8.14 8.14 0 0 1 1.58 1.83L13 17.69v-4.62Zm1.15 6.58L19.74 10a8.16 8.16 0 0 1 .26 2 8 8 0 0 1-5.85 7.7v-.05Z'
    />
  </svg>
);
export default SvgIconAdjustHalf;
