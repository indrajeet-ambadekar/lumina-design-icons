import * as React from "react";
const SvgIconThSlash = ({ title, titleId, ...props }) => (
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
    <g clipPath='url(#icon_th-slash_svg__a)'>
      <path
        fill='#000'
        d='m22.71 21.29-1-1-6-6-6-6-6-6-1-1a1.004 1.004 0 0 0-1.42 1.42l.71.7V21a1 1 0 0 0 1 1h17.59l.7.71a.997.997 0 0 0 1.095.219.999.999 0 0 0 .325-.22 1 1 0 0 0 0-1.42ZM4 5.41 6.59 8H4V5.41ZM8 20H4v-4h4v4Zm0-6H4v-4h4v4Zm2-2.59L12.59 14H10v-2.59ZM14 20h-4v-4h4v4Zm2 0v-2.59L18.59 20H16ZM8.67 4H14v5a1 1 0 0 0 1 1h5v5.33a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1H8.67a1 1 0 1 0 0 2ZM16 4h4v4h-4V4Z'
      />
    </g>
    <defs>
      <clipPath id='icon_th-slash_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconThSlash;
