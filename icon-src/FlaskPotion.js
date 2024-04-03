import * as React from "react";
const SvgFlaskPotion = ({ title, titleId, ...props }) => (
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
      d='M18.93 11.67a.4.4 0 0 0 0-.1A7.4 7.4 0 0 0 15 7.62V4h1a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2h1v3.62a7.4 7.4 0 0 0-3.89 4 .4.4 0 0 0 0 .1 7.5 7.5 0 1 0 13.86 0zm-8.62-2.41a1 1 0 0 0 .69-.95V4h2v4.31a1 1 0 0 0 .69.95A5.43 5.43 0 0 1 16.23 11H7.77a5.43 5.43 0 0 1 2.54-1.74M12 20a5.51 5.51 0 0 1-5.5-5.5 5.3 5.3 0 0 1 .22-1.5h10.56c.144.487.218.992.22 1.5A5.51 5.51 0 0 1 12 20m2-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgFlaskPotion;
