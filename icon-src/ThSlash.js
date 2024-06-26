import * as React from "react";
const SvgThSlash = ({ title, titleId, ...props }) => (
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
    <g clipPath='url(#th-slash_svg__a)'>
      <path
        fill='#000'
        d='m22.71 21.29-1-1-6-6-6-6-6-6-1-1a1.004 1.004 0 0 0-1.42 1.42l.71.7V21a1 1 0 0 0 1 1h17.59l.7.71a1 1 0 0 0 1.095.219 1 1 0 0 0 .325-.22 1 1 0 0 0 0-1.42M4 5.41 6.59 8H4zM8 20H4v-4h4zm0-6H4v-4h4zm2-2.59L12.59 14H10zM14 20h-4v-4h4zm2 0v-2.59L18.59 20zM8.67 4H14v5a1 1 0 0 0 1 1h5v5.33a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1H8.67a1 1 0 1 0 0 2M16 4h4v4h-4z'
      />
    </g>
    <defs>
      <clipPath id='th-slash_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThSlash;
