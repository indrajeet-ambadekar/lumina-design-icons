import * as React from "react";
const SvgIconCommentAltImage = ({ title, titleId, ...props }) => (
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
      d='M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3ZM5.77 16H5a1 1 0 0 1-1-1v-.42l3.3-3.29a1 1 0 0 1 1.41 0l.87.87L5.77 16ZM20 18.59l-2.29-2.3A1 1 0 0 0 17 16H8.59l6.71-6.71a1 1 0 0 1 1.4 0l3.3 3.29v6.01Zm0-8.83-1.88-1.87a3 3 0 0 0-4.24 0L11 10.76l-.88-.87a3.06 3.06 0 0 0-4.24 0L4 11.76V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4.76Z'
    />
  </svg>
);
export default SvgIconCommentAltImage;
