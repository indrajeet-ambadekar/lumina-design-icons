import * as React from "react";
const SvgGitPullRequest = ({ title, titleId, ...props }) => (
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
      d='M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 9v12M13 6h3a2 2 0 0 1 2 2v7M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6'
    />
  </svg>
);
export default SvgGitPullRequest;
