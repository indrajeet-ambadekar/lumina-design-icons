import * as React from "react";
const SvgBehance = ({ title, titleId, ...props }) => (
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
      d='M20.07 6.35H15v1.41h5.09l-.02-1.41ZM19 16.05a2.23 2.23 0 0 1-1.3.37 2.229 2.229 0 0 1-1.7-.54 2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2 5.08 5.08 0 0 0-.8-1.73 4.17 4.17 0 0 0-1.42-1.21 4.37 4.37 0 0 0-2-.45 4.88 4.88 0 0 0-1.9.37 4.51 4.51 0 0 0-1.47 1 4.4 4.4 0 0 0-.95 1.52 5.4 5.4 0 0 0-.33 1.91 5.52 5.52 0 0 0 .32 1.94c.189.563.488 1.084.88 1.53.406.438.905.78 1.46 1a5.2 5.2 0 0 0 1.94.34 4.77 4.77 0 0 0 2.64-.7 4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76Zm-3.43-4.12a1.868 1.868 0 0 1 1-1.14 2.28 2.28 0 0 1 1-.2 1.728 1.728 0 0 1 1.36.49c.34.416.558.918.63 1.45h-4.15c.016-.203.053-.404.11-.6h.05Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1 2.72 2.72 0 0 0 .43-1.58 3.28 3.28 0 0 0-.29-1.48 2.4 2.4 0 0 0-.82-1 3.24 3.24 0 0 0-1.27-.52 7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1c.557 0 1.111-.07 1.65-.21a4.55 4.55 0 0 0 1.43-.65 3.13 3.13 0 0 0 1-1.14 3.41 3.41 0 0 0 .37-1.65 3.47 3.47 0 0 0-.57-2 3 3 0 0 0-1.75-1.19h.05ZM4.77 7.86h2.59c.238 0 .475.02.71.06.216.032.423.107.61.22.18.102.326.255.42.44.116.222.171.47.16.72a1.36 1.36 0 0 1-.47 1.15 2 2 0 0 1-1.22.35h-2.8V7.86Zm4.84 7.44a1.28 1.28 0 0 1-.45.5 2 2 0 0 1-.65.26 3.332 3.332 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41 1.65 1.65 0 0 1 .54 1.39 1.77 1.77 0 0 1-.11.81Z'
    />
  </svg>
);
export default SvgBehance;
