import * as React from "react";
const SvgIconUniversity = ({ title, titleId, ...props }) => (
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
      d='M21 10a1 1 0 0 0 1-1V6a.999.999 0 0 0-.684-.948l-9-3a1.002 1.002 0 0 0-.632 0l-9 3A.999.999 0 0 0 2 6v3a1 1 0 0 0 1 1h1v7.184A2.995 2.995 0 0 0 2 20v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a2.995 2.995 0 0 0-2-2.816V10h1Zm-1 11H4v-1a1.001 1.001 0 0 1 1-1h14a1.001 1.001 0 0 1 1 1v1ZM6 17v-7h2v7H6Zm4 0v-7h4v7h-4Zm6 0v-7h2v7h-2ZM4 8V6.72l8-2.666 8 2.667V8H4Z'
    />
  </svg>
);
export default SvgIconUniversity;
