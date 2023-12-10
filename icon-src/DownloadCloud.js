import * as React from "react";
const SvgDownloadCloud = ({ title, titleId, ...props }) => (
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
    <g
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      clipPath='url(#download-cloud_svg__a)'
    >
      <path d='m8 17 4 4 4-4M12 12v9' />
      <path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29' />
    </g>
    <defs>
      <clipPath id='download-cloud_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownloadCloud;
