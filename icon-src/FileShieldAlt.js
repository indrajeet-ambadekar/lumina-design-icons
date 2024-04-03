import * as React from "react";
const SvgFileShieldAlt = ({ title, titleId, ...props }) => (
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
      d='M10.5 20h-5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0L11.56 2H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2m2-14.59L15.09 8H13.5a1 1 0 0 1-1-1zM7.5 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm13.63 5.86a1 1 0 0 0-.84-.2 2.77 2.77 0 0 1-2.2-.47 1 1 0 0 0-1.18 0 2.78 2.78 0 0 1-2.2.47 1 1 0 0 0-1.21 1V17a4.6 4.6 0 0 0 1.84 3.69l1.56 1.11a1 1 0 0 0 1.2 0l1.56-1.16A4.6 4.6 0 0 0 21.5 17v-2.37a1 1 0 0 0-.37-.77M19.5 17a2.62 2.62 0 0 1-1 2.09l-1 .72-1-.72a2.62 2.62 0 0 1-1-2.09v-1.28a4.7 4.7 0 0 0 2-.55c.617.33 1.3.519 2 .55zm-9-.95h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m1-4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2'
    />
  </svg>
);
export default SvgFileShieldAlt;
