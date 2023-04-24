import * as React from "react";
const SvgIconBug = ({ title, titleId, ...props }) => (
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
      d='M19 14h2a1 1 0 0 0 0-2h-2v-1a5.15 5.15 0 0 0-.21-1.36A5 5 0 0 0 22 5a1 1 0 0 0-2 0 3 3 0 0 1-2.14 2.87A5 5 0 0 0 16 6.4c.01-.133.01-.267 0-.4a4 4 0 1 0-8 0 2.58 2.58 0 0 0 0 .4 5 5 0 0 0-1.9 1.47A3 3 0 0 1 4 5a1 1 0 0 0-2 0 5 5 0 0 0 3.21 4.64c-.13.442-.201.9-.21 1.36v1H3a1 1 0 0 0 0 2h2v1a7 7 0 0 0 .14 1.38A5 5 0 0 0 2 21a1 1 0 1 0 2 0 3 3 0 0 1 1.81-2.74 7 7 0 0 0 12.38 0A3 3 0 0 1 20 21a1 1 0 0 0 2 0 5 5 0 0 0-3.14-4.62c.092-.454.14-.916.14-1.38v-1Zm-8 5.9A5 5 0 0 1 7 15v-4a3 3 0 0 1 3-3h1v11.9ZM10 6a2 2 0 1 1 4 0h-4Zm7 9a5 5 0 0 1-4 4.9V8h1a3 3 0 0 1 3 3v4Z'
    />
  </svg>
);
export default SvgIconBug;
