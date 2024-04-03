import * as React from "react";
const SvgSnowflakeAlt = ({ title, titleId, ...props }) => (
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
      d='M4.93 17.66a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418M19.07 6.34a1 1 0 1 0-1.41-1.418 1 1 0 0 0 1.41 1.418m-12.73 0a1 1 0 1 0-1.41-1.418A1 1 0 0 0 6.34 6.34m11.32 11.32a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418M21 11h-1.59l1.3-1.29A1.005 1.005 0 0 0 20 7.996a1 1 0 0 0-.71.294L16.59 11h-2.18l2.3-2.29A1.005 1.005 0 0 0 16 6.996a1 1 0 0 0-.71.294L13 9.59V7.41l2.71-2.7A1.005 1.005 0 0 0 15 2.996c-.266 0-.522.106-.71.294L13 4.59V3a1 1 0 0 0-2 0v1.59l-1.29-1.3a1.004 1.004 0 0 0-1.42 1.42L11 7.41v2.18l-2.29-2.3a1.004 1.004 0 1 0-1.42 1.42L9.59 11H7.41l-2.7-2.71a1.004 1.004 0 0 0-1.42 1.42L4.59 11H3a1 1 0 0 0 0 2h1.59l-1.3 1.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L7.41 13h2.18l-2.3 2.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.29-2.3v2.18l-2.71 2.7a1.004 1.004 0 0 0 1.42 1.42l1.29-1.3V21a1 1 0 0 0 2 0v-1.59l1.29 1.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L13 16.59v-2.18l2.29 2.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L14.41 13h2.18l2.7 2.71a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L19.41 13H21a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgSnowflakeAlt;
