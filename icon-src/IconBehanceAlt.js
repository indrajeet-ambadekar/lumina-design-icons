import * as React from "react";
const SvgIconBehanceAlt = ({ title, titleId, ...props }) => (
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
      d='M22.108 15.032a.999.999 0 0 0-1.215.722 2.999 2.999 0 0 1-5.901-.753v-1h7a1.001 1.001 0 0 0 1-1 5 5 0 1 0-10 0v2a4.998 4.998 0 0 0 9.84 1.246 1 1 0 0 0-.724-1.215ZM17.992 10c.793 0 1.554.314 2.118.873.313.32.551.705.698 1.127h-5.632a2.995 2.995 0 0 1 2.816-2Zm-2-3h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2ZM9.91 11.718A3.987 3.987 0 0 0 6.992 5h-5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h5.5a4.492 4.492 0 0 0 2.418-8.282ZM2.992 7h4a2 2 0 1 1 0 4h-4V7Zm4.5 11h-4.5v-5h4.5a2.5 2.5 0 1 1 0 5Z'
    />
  </svg>
);
export default SvgIconBehanceAlt;
