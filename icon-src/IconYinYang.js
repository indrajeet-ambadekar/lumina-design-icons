import * as React from "react";
const SvgIconYinYang = ({ title, titleId, ...props }) => (
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
      d='M12 15.5a1 1 0 1 0 0 2.001 1 1 0 0 0 0-2.001ZM12 2c-.188 0-.375.01-.562.029A9.994 9.994 0 0 0 12 22c.187 0 .375-.01.562-.029A9.993 9.993 0 0 0 12 2Zm0 18A7.989 7.989 0 0 1 6.71 6.015 5.484 5.484 0 0 0 12 13a3.5 3.5 0 0 1 0 7Zm5.29-2.015A5.485 5.485 0 0 0 12 11a3.5 3.5 0 1 1 0-7 7.99 7.99 0 0 1 5.29 13.985ZM12 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'
    />
  </svg>
);
export default SvgIconYinYang;
