import * as React from "react";
const SvgIconEnvelopeExclamation = ({ title, titleId, ...props }) => (
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
      d='M21 13.5a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.91l5.88 5.88a3 3 0 0 0 4.24 0l3.59-3.58a1.004 1.004 0 1 0-1.42-1.42l-3.58 3.59a1.002 1.002 0 0 1-1.42 0L5.41 7.5H17a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Zm0-11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm-.2 7a.64.64 0 0 0-.18.06.76.76 0 0 0-.18.09l-.15.12a1.05 1.05 0 0 0-.29.71 1.23 1.23 0 0 0 0 .19c.01.066.03.13.06.19a.762.762 0 0 0 .09.18c.037.052.077.103.12.15a1.002 1.002 0 0 0 1.42 0l.12-.15a.762.762 0 0 0 .09-.18c.03-.06.05-.124.06-.19a1.23 1.23 0 0 0 0-.19 1 1 0 0 0-1.2-1l.04.02Z'
    />
  </svg>
);
export default SvgIconEnvelopeExclamation;
