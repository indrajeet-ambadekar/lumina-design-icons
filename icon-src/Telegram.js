import * as React from "react";
const SvgTelegram = ({ title, titleId, ...props }) => (
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
      d='M11.994 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m3.18 15.153a.707.707 0 0 1-1.002.351l-2.715-2.11-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.988.01.008.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.149-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258z'
    />
  </svg>
);
export default SvgTelegram;
