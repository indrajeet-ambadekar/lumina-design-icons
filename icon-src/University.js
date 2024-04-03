import * as React from "react";
const SvgUniversity = ({ title, titleId, ...props }) => (
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
      d='M21 10a1 1 0 0 0 1-1V6a1 1 0 0 0-.684-.948l-9-3a1 1 0 0 0-.632 0l-9 3A1 1 0 0 0 2 6v3a1 1 0 0 0 1 1h1v7.184A2.995 2.995 0 0 0 2 20v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a2.995 2.995 0 0 0-2-2.816V10zm-1 11H4v-1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zM6 17v-7h2v7zm4 0v-7h4v7zm6 0v-7h2v7zM4 8V6.72l8-2.666 8 2.667V8z'
    />
  </svg>
);
export default SvgUniversity;
