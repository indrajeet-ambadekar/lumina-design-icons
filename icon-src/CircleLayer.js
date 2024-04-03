import * as React from "react";
const SvgCircleLayer = ({ title, titleId, ...props }) => (
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
      d='M15 2a7 7 0 0 0-6.88 5.74A6 6 0 0 0 5 12.41 5 5 0 1 0 11.59 19a6 6 0 0 0 4.67-3.09A7 7 0 0 0 15 2m-5 15.43c0 .1 0 .2-.07.31a3 3 0 1 1-3.64-3.64l.28-.1A2.94 2.94 0 0 1 10 17.43m5-3.67q-.02.097-.05.19a4.001 4.001 0 0 1-2.87 2.94c0-.18 0-.35-.06-.53s0-.27 0-.4-.12-.38-.18-.57-.07-.24-.12-.36a4 4 0 0 0-.3-.55c0-.09-.09-.19-.15-.28a5.3 5.3 0 0 0-.6-.73l-.2-.17a6 6 0 0 0-.53-.43 3 3 0 0 0-.34-.19 4 4 0 0 0-.5-.27 2.3 2.3 0 0 0-.4-.13 3 3 0 0 0-.52-.16c-.14 0-.29 0-.44-.06L7.13 12a4 4 0 0 1 2.92-2.87l.2-.05A3.7 3.7 0 0 1 11 9a4 4 0 0 1 4 4 4 4 0 0 1-.08.76zm2-.16V13a6 6 0 0 0-6-6h-.6a5 5 0 1 1 6.6 6.6'
    />
  </svg>
);
export default SvgCircleLayer;
