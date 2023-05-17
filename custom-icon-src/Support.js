import * as React from "react";
const SvgSupport = ({ title, titleId, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='support_svg__Layer_1'
    width='1em'
    height='1em'
    data-name='Layer 1'
    viewBox='0 0 64 64'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>
        {
          ".support_svg__cls-4{fill:#a3cef1}.support_svg__cls-5{fill:#dda15e}.support_svg__cls-6{fill:#6096ba}.support_svg__cls-7{fill:#274c77}"
        }
      </style>
    </defs>
    <path
      d='m26.58 39.04-3 1.29c-1.01.43-2.15.43-3.15 0l-3-1.29a4.002 4.002 0 0 1-2.42-3.68V30c0-3.31 2.69-6 6-6h2c3.31 0 6 2.69 6 6v5.36c0 1.6-.95 3.05-2.42 3.68Z'
      className='support_svg__cls-5'
    />
    <path
      d='M35.14 45c-1.82-1.85-4.35-3-7.14-3h-3c0 1.66-1.34 3-3 3s-3-1.34-3-3h-3c-5.52 0-10 4.48-10 10v7h22l4-14h3.14Z'
      className='support_svg__cls-7'
    />
    <path d='M17 55h2c1.1 0 2 .9 2 2v2h-4v-4Z' className='support_svg__cls-5' />
    <path
      d='M12 31.73c-.29.17-.64.27-1 .27-1.1 0-2-.9-2-2s.9-2 2-2c.42 0 .81.13 1.14.36M32 31.73c.29.17.64.27 1 .27 1.1 0 2-.9 2-2s-.9-2-2-2c-.42 0-.81.13-1.14.36'
      className='support_svg__cls-7'
    />
    <path
      d='m19 39.71 1.42.61c1.01.44 2.15.44 3.16 0l1.42-.61V42c0 1.66-1.34 3-3 3s-3-1.34-3-3v-2.29Z'
      style={{
        fill: "#bc6c25"
      }}
    />
    <path
      d='m28 59 4-14h22l-4 14'
      style={{
        fill: "#8b8c89"
      }}
    />
    <path
      d='M28.4 27.38h-.01c-.57-.23-1.23-.38-2.06-.38-4.33 0-4.33 4-8.67 4-1.13 0-1.97-.27-2.66-.67V30c0-3.31 2.69-6 6-6h2a5.99 5.99 0 0 1 5.39 3.38h.01Z'
      className='support_svg__cls-7'
    />
    <path
      d='M29 34.6V30c0-3.31-2.69-6-6-6h-2c-3.31 0-6 2.69-6 6v4h-2c-.55 0-1-.45-1-1v-3c0-5.52 4.48-10 10-10 2.76 0 5.26 1.12 7.07 2.93S32 27.24 32 30v3.18c0 .48-.34.89-.8.98l-2.2.44Z'
      style={{
        fill: "#e7ecef"
      }}
    />
    <path
      d='M41 51c.55 0 1 .45 1 1s-.45 1-1 1v-2Z'
      className='support_svg__cls-4'
    />
    <path
      d='M22 36c-.11-.54.24-1.07.78-1.18L31 33.18v-2.86c0-4.79-3.61-8.98-8.38-9.3C17.38 20.67 13 24.83 13 30v3h2v2h-2c-1.1 0-2-.9-2-2v-2.68c0-5.72 4.24-10.74 9.94-11.27C27.48 18.43 33 23.58 33 30v3.18a2 2 0 0 1-1.61 1.96l-8.22 1.64c-.54.11-1.07-.24-1.18-.78ZM22 59h-2v-2c0-.55-.45-1-1-1h-7c-.55 0-1-.45-1-1v-4c0-.27.11-.52.29-.71L12.58 49a.996.996 0 1 1 1.41 1.41l-1 1V54h6c1.66 0 3 1.34 3 3v2Z'
      className='support_svg__cls-6'
    />
    <path d='M4 59h50v2H4z' className='support_svg__cls-4' />
    <path
      d='m37 10.45 3.07-1.02c.72-.24 1.51-.05 2.05.48L53.1 20.89c.54.54.72 1.33.48 2.05l-1.02 3.07 4.24 4.24 2.64-4.39c.94-1.57.7-3.59-.6-4.89L42.03 4.17a3.993 3.993 0 0 0-4.89-.6l-4.39 2.64 4.24 4.24Z'
      className='support_svg__cls-7'
    />
    <path
      d='M33.46 13.98c-.57-.57-.88-1.32-.88-2.12s.31-1.55.88-2.12l1.41 1.42c-.19.19-.29.44-.29.71s.1.52.29.71L33.46 14Z'
      className='support_svg__cls-4'
    />
    <path
      d='M31.34 16.11a6.011 6.011 0 0 1 0-8.49l1.41 1.41a4.008 4.008 0 0 0 0 5.66l-1.41 1.41Z'
      className='support_svg__cls-4'
    />
    <path
      d='M29.22 18.23c-3.51-3.51-3.51-9.22 0-12.73l1.41 1.41a7.007 7.007 0 0 0 0 9.9l-1.41 1.41ZM51.14 30.42c-.77 0-1.54-.29-2.12-.88l1.41-1.42c.39.39 1.02.39 1.42 0l1.41 1.42a3 3 0 0 1-2.12.88Z'
      className='support_svg__cls-4'
    />
    <path
      d='M51.14 33.42c-1.54 0-3.07-.58-4.24-1.75l1.41-1.41a4.008 4.008 0 0 0 5.66 0l1.41 1.41a5.98 5.98 0 0 1-4.24 1.75Z'
      className='support_svg__cls-4'
    />
    <path
      d='M51.14 36.42c-2.3 0-4.61-.88-6.36-2.63l1.41-1.41a7.007 7.007 0 0 0 9.9 0l1.41 1.41a8.98 8.98 0 0 1-6.36 2.63Z'
      className='support_svg__cls-4'
    />
  </svg>
);
export default SvgSupport;
