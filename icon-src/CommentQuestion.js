import * as React from "react";
const SvgCommentQuestion = ({ title, titleId, ...props }) => (
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
      d='M14.77 5.87a1 1 0 0 0 1.36-.37A1 1 0 0 1 18 6a1 1 0 0 1-1 1 1 1 0 0 0 0 2 3 3 0 1 0-2.6-4.5 1 1 0 0 0 .37 1.37m4.3 7.13a1 1 0 0 0-1.12.86A7 7 0 0 1 11 20H5.41l.65-.65a1 1 0 0 0 0-1.41A7 7 0 0 1 11 6a1 1 0 1 0 0-2 9 9 0 0 0-7 14.61l-1.71 1.68a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 8.93-7.87 1 1 0 0 0-.86-1.13m-1.69-2.93a1 1 0 0 0-.58-.07l-.18.06-.18.09-.15.13q-.136.139-.21.32a.84.84 0 0 0-.08.4 1 1 0 0 0 .07.39q.08.182.22.32A1 1 0 0 0 17 12a1 1 0 0 0 1-1 .84.84 0 0 0-.08-.38 1.07 1.07 0 0 0-.54-.54z'
    />
  </svg>
);
export default SvgCommentQuestion;
