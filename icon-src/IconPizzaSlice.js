import * as React from "react";
const SvgIconPizzaSlice = ({ title, titleId, ...props }) => (
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
      d='M8.51 12.48a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4.48a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 10a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm8.5-1.43a3 3 0 0 0-2.3-.29 2.9 2.9 0 0 0-1.09.56L5.51 2.13a1 1 0 0 0-1 0A1 1 0 0 0 4 3v13.17A2.94 2.94 0 0 0 2 19a3 3 0 0 0 2.92 3h.58a18.571 18.571 0 0 0 16.11-9.41 3 3 0 0 0-1.1-4.02h-.01ZM6 4.73l9.89 5.71A12.57 12.57 0 0 1 6 16V4.73Zm13.87 6.88A16.58 16.58 0 0 1 5 20a1 1 0 0 1-.923-1.39 1 1 0 0 1 .223-.33A1 1 0 0 1 5 18h.51a14.5 14.5 0 0 0 12.62-7.37.901.901 0 0 1 .58-.44 1 1 0 0 1 .75.09 1 1 0 0 1 .42 1.33h-.01Z'
    />
  </svg>
);
export default SvgIconPizzaSlice;
