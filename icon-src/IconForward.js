import * as React from "react";
const SvgIconForward = ({ title, titleId, ...props }) => (
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
      d='M20.67 9.69 14 5.84a2.67 2.67 0 0 0-4 2.31L6 5.84a2.67 2.67 0 0 0-4 2.31v7.7a2.63 2.63 0 0 0 1.33 2.3c.405.242.868.37 1.34.37A2.69 2.69 0 0 0 6 18.16l4-2.31a2.65 2.65 0 0 0 1.33 2.31 2.66 2.66 0 0 0 2.67 0l6.67-3.85a2.669 2.669 0 0 0 0-4.62ZM10 13.54l-5 2.88a.67.67 0 0 1-1-.57v-7.7a.67.67 0 0 1 1-.57l5 2.88v3.08Zm9.67-1L13 16.43a.689.689 0 0 1-.67 0 .66.66 0 0 1-.33-.58v-7.7a.66.66 0 0 1 .33-.58.78.78 0 0 1 .34-.09.63.63 0 0 1 .33.09l6.67 3.85a.67.67 0 0 1 0 1.16v-.04Z'
    />
  </svg>
);
export default SvgIconForward;
