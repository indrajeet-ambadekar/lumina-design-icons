import * as React from "react";
const SvgIconEnvelopeShield = ({ title, titleId, ...props }) => (
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
      d='M21.63 5.12a1 1 0 0 0-.84-.2 2.74 2.74 0 0 1-2.2-.46 1 1 0 0 0-1.18 0 2.74 2.74 0 0 1-2.2.46A1 1 0 0 0 14 5.9v3.31a4.619 4.619 0 0 0 1.84 3.7l1.57 1.16a1 1 0 0 0 1.18 0l1.57-1.16A4.618 4.618 0 0 0 22 9.21V5.9a1 1 0 0 0-.37-.78ZM20 9.21a2.61 2.61 0 0 1-1 2.09l-1 .7-1-.72a2.61 2.61 0 0 1-1-2.09V7a4.67 4.67 0 0 0 2-.54A4.67 4.67 0 0 0 20 7v2.21Zm1 6a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.67l5.88 5.88a3 3 0 0 0 3.276.647 3 3 0 0 0 .984-.667l-.7-.71-.74-.68a1 1 0 0 1-1.4 0L5.41 8.26H11a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1v-.05Z'
    />
  </svg>
);
export default SvgIconEnvelopeShield;
