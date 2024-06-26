import * as React from "react";
const SvgCloudShowersHeavy = ({ title, titleId, ...props }) => (
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
      d='M12.89 18.06a1 1 0 0 0-1.28.6l-.73 2a1 1 0 0 0 1.88.68l.73-2a1 1 0 0 0-.6-1.28m-4 0a1 1 0 0 0-1.28.6l-.73 2a1 1 0 0 0 1.88.68l.73-2a1 1 0 0 0-.6-1.28m0-7a1 1 0 0 0-1.28.6l-1.1 3a1 1 0 0 0 1.88.68l1.1-3a1 1 0 0 0-.6-1.28m4 0a1 1 0 0 0-1.28.6l-1.1 3a1 1 0 0 0 1.88.68l1.1-3a1 1 0 0 0-.6-1.28m5.53-4.84A7 7 0 0 0 5.06 8.11 4 4 0 0 0 2 12a4 4 0 0 0 1.34 3 1 1 0 1 0 1.32-1.5A2 2 0 0 1 4 12a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67A3 3 0 0 1 20 11a2.9 2.9 0 0 1-.74 2 1 1 0 0 0 1.48 1.34 5 5 0 0 0-2.32-8.08zm-1.53 11.84a1 1 0 0 0-1.28.6l-.73 2a1 1 0 0 0 1.88.68l.73-2a1 1 0 0 0-.6-1.28m0-7a1 1 0 0 0-1.28.6l-1.1 3a1 1 0 0 0 1.88.68l1.1-3a1 1 0 0 0-.6-1.28'
    />
  </svg>
);
export default SvgCloudShowersHeavy;
