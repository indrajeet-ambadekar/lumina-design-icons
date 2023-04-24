import * as React from "react";
const SvgIconGitBranch = ({ title, titleId, ...props }) => (
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
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M18 9a9 9 0 0 1-9 9M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 3v12'
    />
  </svg>
);
export default SvgIconGitBranch;
