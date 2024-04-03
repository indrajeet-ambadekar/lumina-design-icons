import * as React from "react";
const SvgListUl = ({ title, titleId, ...props }) => (
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
      d='M3.71 16.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09q.147.133.33.21a.94.94 0 0 0 .76 0 1.2 1.2 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.33M7 8h14a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2m-3.29 3.29a1 1 0 0 0-1.09-.21 1.2 1.2 0 0 0-.33.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76q.076.183.21.33.147.133.33.21a.94.94 0 0 0 .76 0 1.2 1.2 0 0 0 .33-.21 1.2 1.2 0 0 0 .21-.33.94.94 0 0 0 0-.76 1 1 0 0 0-.21-.33M21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M3.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.2 1.2 0 0 0-.21.33.94.94 0 0 0 0 .76q.076.183.21.33.147.133.33.21a1 1 0 0 0 1.09-.21 1.2 1.2 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.2 1.2 0 0 0-.21-.33M21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgListUl;
