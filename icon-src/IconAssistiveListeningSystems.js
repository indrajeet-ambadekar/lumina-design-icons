import * as React from "react";
const SvgIconAssistiveListeningSystems = ({ title, titleId, ...props }) => (
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
      d='M11 3a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 9.29 2.57L11.73 20A2 2 0 0 1 8 19a1 1 0 1 0-2 0 4 4 0 0 0 6.033 3.443A4 4 0 0 0 13.5 20.93l3.56-7.43A7 7 0 0 0 11 3ZM4 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM17.59 1.2a1 1 0 0 0-1.2 1.6A9 9 0 0 1 20 10a1 1 0 0 0 2 0 11.06 11.06 0 0 0-4.41-8.8ZM11 9a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-6 0 3 3 0 0 0 .51 1.68c.138.196.295.377.47.54l.2.22a1 1 0 0 1 0 1.11 1 1 0 0 0 1.283 1.456 1 1 0 0 0 .357-.316 3 3 0 0 0-.35-3.81l-.14-.14a1.367 1.367 0 0 1-.16-.18A1 1 0 0 1 11 9Zm-4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
    />
  </svg>
);
export default SvgIconAssistiveListeningSystems;
