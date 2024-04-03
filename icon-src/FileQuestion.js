import * as React from "react";
const SvgFileQuestion = ({ title, titleId, ...props }) => (
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
      d='M12.57 17.29a1 1 0 0 0-1.63.33 1.07 1.07 0 0 0 0 .76q.082.184.22.33a1 1 0 0 0 .32.21c.123.052.256.08.39.08a1 1 0 0 0 .92-1.38.9.9 0 0 0-.22-.33M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.09a.9.9 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94m-6-3.53L16.59 8H15a1 1 0 0 1-1-1zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3zm-6.13-9a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1 1 1 0 0 1 1.577-.207A1 1 0 0 1 11.87 14a1 1 0 0 0 0 2 3 3 0 0 0 0-6'
    />
  </svg>
);
export default SvgFileQuestion;
