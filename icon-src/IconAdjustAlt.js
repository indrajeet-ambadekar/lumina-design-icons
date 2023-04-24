import * as React from "react";
const SvgIconAdjustAlt = ({ title, titleId, ...props }) => (
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
      d='M20.83 7.32a.2.2 0 0 0 0-.08 10 10 0 0 0-3.38-3.65A9.89 9.89 0 0 0 12 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h.28a10 10 0 0 0 8.55-14.68ZM13 4.06c.865.11 1.706.36 2.49.74L13 9.12V4.06Zm0 9.06 4.17-7.22a7.888 7.888 0 0 1 1.58 1.83L13 17.69v-4.57Zm1.16 6.57L19.75 10c.164.654.248 1.326.25 2a7.94 7.94 0 0 1-5.84 7.69Z'
    />
  </svg>
);
export default SvgIconAdjustAlt;
