import * as React from "react";
const SvgCarWash = ({ title, titleId, ...props }) => (
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
      d='M7.5 4a1 1 0 0 0 .71-.29l1-1a1.004 1.004 0 0 0-1.42-1.42l-1 1A1 1 0 0 0 7.5 4m4 0a1 1 0 0 0 .71-.29l1-1a1.004 1.004 0 1 0-1.42-1.42l-1 1A1.001 1.001 0 0 0 11.5 4m4 0a1 1 0 0 0 .71-.29l1-1A1.005 1.005 0 0 0 16.5.996a1 1 0 0 0-.71.294l-1 1A1.001 1.001 0 0 0 15.5 4m2.42 11.62a.8.8 0 0 0-.09-.18l-.12-.15-.15-.12a.8.8 0 0 0-.18-.09 1 1 0 0 0-1.09.21 2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 .62.92A1 1 0 0 0 17 17a1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.08-.18m1.84-4.51L18.4 7.05a3 3 0 0 0-2.84-2H8.44a3 3 0 0 0-2.84 2l-1.36 4.06A3 3 0 0 0 2 14v4a3 3 0 0 0 2 2.82V22a1 1 0 1 0 2 0v-1h12v1a1 1 0 1 0 2 0v-1.18A3 3 0 0 0 22 18v-4a3 3 0 0 0-2.24-2.89M7.49 7.68A1 1 0 0 1 8.44 7h7.12a1 1 0 0 1 1 .68L17.61 11H6.39zM20 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-7-3h-2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2m-5.08.62a.8.8 0 0 0-.09-.18l-.12-.15a1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21 2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.08.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 2 0 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.08-.18'
    />
  </svg>
);
export default SvgCarWash;
