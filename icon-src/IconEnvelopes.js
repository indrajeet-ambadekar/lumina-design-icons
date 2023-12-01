import * as React from "react";
const SvgIconEnvelopes = ({ title, titleId, ...props }) => (
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
    <g clipPath='url(#icon_envelopes_svg__a)'>
      <path
        fill='#000'
        d='M17 21.63H5a3 3 0 0 1-3-3v-8a1 1 0 0 0-2 0v8a5 5 0 0 0 5 5h12a1 1 0 0 0 0-2Zm4-18H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm-.41 2-5.88 5.88a1.002 1.002 0 0 1-1.42 0L7.41 5.63h13.18Zm1.41 11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7l5.88 5.88a3 3 0 0 0 4.24 0L22 7v9.63Z'
      />
    </g>
    <defs>
      <clipPath id='icon_envelopes_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconEnvelopes;
