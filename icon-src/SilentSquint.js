import * as React from "react";
const SvgSilentSquint = ({ title, titleId, ...props }) => (
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
      d='M7.66 12.21a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1.004 1.004 0 1 0-1.42 1.42l.8.79-.8.79a1 1 0 0 0 0 1.42m7.5 0a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71l-.79-.79.79-.79a1.005 1.005 0 0 0-.71-1.714 1 1 0 0 0-.71.294l-1.5 1.5a1 1 0 0 0 0 1.42zm.11 2a1 1 0 0 0-1.2 0l-.74.55-.73-.55a1 1 0 0 0-1.2 0l-.73.55-.74-.55a1 1 0 0 0-1.2 0l-1.33 1a1 1 0 0 0 1.2 1.6l.73-.55.74.55a.7.7 0 0 0 .12.06.8.8 0 0 0 .22.08h.48a1.1 1.1 0 0 0 .33-.16l.73-.55.73.55a1 1 0 0 0 1 .11l.1-.05a.4.4 0 0 0 .11-.06l.74-.55.73.55a1 1 0 0 0 1.2-1.6zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20'
    />
  </svg>
);
export default SvgSilentSquint;
