import * as React from "react";
const SvgAmazon = ({ title, titleId, ...props }) => (
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
      d='M1.04 17.52c.067-.107.173-.113.32-.02a21.307 21.307 0 0 0 10.88 2.9 21.523 21.523 0 0 0 7.74-1.46l.29-.12c.127-.053.217-.093.27-.12a.356.356 0 0 1 .47.12c.113.16.077.307-.11.44-.24.173-.547.373-.92.6a14.99 14.99 0 0 1-3.84 1.58c-1.35.365-2.742.553-4.14.56a16.016 16.016 0 0 1-5.9-1.09 16.244 16.244 0 0 1-4.98-3.07.273.273 0 0 1-.12-.2.215.215 0 0 1 .04-.12Zm6.02-5.7a4.036 4.036 0 0 1 .68-2.36A4.197 4.197 0 0 1 9.6 7.98c.852-.34 1.747-.562 2.66-.66.36-.04.947-.093 1.76-.16v-.34a3.562 3.562 0 0 0-.28-1.72 1.5 1.5 0 0 0-1.32-.6h-.16c-.412.03-.807.175-1.14.42a1.64 1.64 0 0 0-.62 1 .508.508 0 0 1-.4.46L7.8 6.1c-.227-.053-.34-.173-.34-.36a.587.587 0 0 1 .02-.14 3.834 3.834 0 0 1 1.67-2.64A6.268 6.268 0 0 1 12.26 2h.5a5.054 5.054 0 0 1 3.56 1.18c.134.134.258.278.37.43.099.13.189.268.27.41.083.165.143.34.18.52.053.227.093.383.12.47.038.184.058.372.06.56.013.287.02.457.02.51v4.84a2.87 2.87 0 0 0 .15.95c.068.22.165.428.29.62.093.127.247.33.46.61a.6.6 0 0 1 .12.32.345.345 0 0 1-.16.28l-1.8 1.56a.558.558 0 0 1-.58.04 6.75 6.75 0 0 1-.49-.46c-.14-.147-.24-.253-.3-.32a4.447 4.447 0 0 1-.29-.39 8.212 8.212 0 0 0-.28-.39 4.91 4.91 0 0 1-2.2 1.52 6.038 6.038 0 0 1-1.68.2 3.504 3.504 0 0 1-2.53-.95 3.553 3.553 0 0 1-.99-2.69Zm3.44-.4c-.023.45.116.893.39 1.25a1.293 1.293 0 0 0 1.22.45c.05-.01.1-.017.15-.02a2.031 2.031 0 0 0 1.3-1.08c.15-.26.26-.539.33-.83.064-.239.104-.483.12-.73.007-.187.01-.493.01-.92v-.5a7.287 7.287 0 0 0-1.76.16 2.144 2.144 0 0 0-1.76 2.22Zm8.4 6.44a.628.628 0 0 1 .12-.16c.291-.207.616-.362.96-.46a6.52 6.52 0 0 1 1.48-.22c.127-.014.255-.007.38.02.6.053.96.153 1.08.3.06.11.088.235.08.36v.14a4.558 4.558 0 0 1-.38 1.65 3.84 3.84 0 0 1-1.06 1.53.302.302 0 0 1-.18.08.177.177 0 0 1-.08-.02c-.08-.04-.1-.113-.06-.22.38-.76.63-1.578.74-2.42a.513.513 0 0 0-.08-.32c-.133-.16-.507-.24-1.12-.24-.227 0-.493.013-.8.04-.333.04-.64.08-.92.12a.231.231 0 0 1-.16-.04.065.065 0 0 1-.02-.08.152.152 0 0 1 .02-.06Z'
    />
  </svg>
);
export default SvgAmazon;
