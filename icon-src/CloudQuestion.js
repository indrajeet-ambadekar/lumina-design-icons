import * as React from "react";
const SvgCloudQuestion = ({ title, titleId, ...props }) => (
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
      d='M18.42 8.22a7 7 0 0 0-13.36 1.89A4 4 0 0 0 6 18h2a1 1 0 1 0 0-2H6a2 2 0 1 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67A3 3 0 0 1 20 13a3 3 0 0 1-3 3 1 1 0 0 0 0 2 5 5 0 0 0 1.42-9.78m-5.5 10.4a.6.6 0 0 0-.09-.17l-.12-.16a1.2 1.2 0 0 0-.33-.21 1 1 0 0 0-1.09.21l-.12.16a.6.6 0 0 0-.09.17.6.6 0 0 0-.06.18 2 2 0 0 0 0 .2 1 1 0 0 0 0 .19q.015.1.06.19.03.093.09.17l.12.16c.192.183.445.286.71.29a1 1 0 0 0 .38-.08 1.2 1.2 0 0 0 .33-.21l.12-.16a.6.6 0 0 0 .09-.17q.045-.09.06-.19.018-.094.02-.19a2 2 0 0 0 0-.2.6.6 0 0 0-.08-.18M12 11a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1A1 1 0 0 1 12 13a1 1 0 1 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6'
    />
  </svg>
);
export default SvgCloudQuestion;
