import * as React from "react";
const SvgIconShieldExclamation = ({ title, titleId, ...props }) => (
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
      d='M12.92 15a.561.561 0 0 0-.09-.17l-.12-.15a1 1 0 0 0-1.54.15.561.561 0 0 0-.09.17.699.699 0 0 0-.06.19 1.23 1.23 0 0 0 0 .19.88.88 0 0 0 .08.39 1 1 0 0 0 1.3.54c.121-.054.233-.129.33-.22.09-.092.161-.2.21-.32.053-.123.08-.256.08-.39a1.23 1.23 0 0 0 0-.19.702.702 0 0 0-.1-.19ZM12 7.36a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm7.63-3.71a1 1 0 0 0-.84-.2 8 8 0 0 1-6.22-1.27 1 1 0 0 0-1.14 0 8 8 0 0 1-6.22 1.27A1 1 0 0 0 4 4.43v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39 10 10 0 0 0 6 1.39v6.3Z'
    />
  </svg>
);
export default SvgIconShieldExclamation;
