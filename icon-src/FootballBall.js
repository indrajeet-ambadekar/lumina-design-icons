import * as React from "react";
const SvgFootballBall = ({ title, titleId, ...props }) => (
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
      d='M21.84 5.56a4.08 4.08 0 0 0-1.14-2.25 4.08 4.08 0 0 0-2.25-1.14A14.45 14.45 0 0 0 2.16 18.44a4.08 4.08 0 0 0 1.14 2.25 4.08 4.08 0 0 0 2.25 1.14q1.032.168 2.08.17a14.37 14.37 0 0 0 10.11-4.26 14.23 14.23 0 0 0 4.1-12.18M4.21 18.37a2 2 0 0 1-.07-.24A12.21 12.21 0 0 1 7.67 7.67 12.4 12.4 0 0 1 16.37 4a10.4 10.4 0 0 1 1.76.14q.122.025.24.07l-4.93 4.94-.73-.73a1 1 0 1 0-1.42 1.41l.73.73L10.56 12l-.73-.73a1 1 0 1 0-1.41 1.42l.73.73zm12.12-2a12.24 12.24 0 0 1-10.46 3.49 2 2 0 0 1-.24-.07l4.93-4.94.73.73a1 1 0 1 0 1.42-1.41l-.71-.73L13.44 12l.73.73a1 1 0 0 0 1.631-.331 1 1 0 0 0-.221-1.089l-.73-.73 4.94-4.93q.043.117.07.24a12.21 12.21 0 0 1-3.53 10.44z'
    />
  </svg>
);
export default SvgFootballBall;
