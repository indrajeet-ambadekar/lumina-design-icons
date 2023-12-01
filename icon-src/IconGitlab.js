import * as React from "react";
const SvgIconGitlab = ({ title, titleId, ...props }) => (
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
    <g clipPath='url(#icon_gitlab_svg__a)'>
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M22.65 14.39 12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.43.43 0 0 1 5.4 2a.42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51a.43.43 0 0 1 .69-.16.42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94v0Z'
      />
    </g>
    <defs>
      <clipPath id='icon_gitlab_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconGitlab;
