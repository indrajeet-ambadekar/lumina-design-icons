import * as React from "react";
const SvgIconCube = ({ title, titleId, ...props }) => (
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
      d='M20.47 7.37v-.08l-.06-.15a.694.694 0 0 0-.07-.09.93.93 0 0 0-.09-.12l-.09-.07-.16-.08-7.5-4.63a1 1 0 0 0-1.06 0L4 6.78l-.09.08-.09.07a.94.94 0 0 0-.09.12.71.71 0 0 0-.07.09l-.06.15v.08c-.01.086-.01.174 0 .26v8.74a1 1 0 0 0 .47.85l7.5 4.63a.467.467 0 0 0 .15.06h.08a.86.86 0 0 0 .52 0h.08a.465.465 0 0 0 .15-.06L20 17.22a.999.999 0 0 0 .47-.85V7.63c.01-.086.01-.174 0-.26ZM11 19.21l-5.5-3.4V9.43l5.5 3.39v6.39Zm1-8.12L6.4 7.63 12 4.18l5.6 3.45-5.6 3.46Zm6.5 4.72-5.5 3.4v-6.39l5.5-3.39v6.38Z'
    />
  </svg>
);
export default SvgIconCube;
