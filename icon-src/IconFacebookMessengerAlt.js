import * as React from "react";
const SvgIconFacebookMessengerAlt = ({ title, titleId, ...props }) => (
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
      d='M11.991 1a10.614 10.614 0 0 0-11 10.7 10.462 10.462 0 0 0 3.414 7.866l.052 1.69a1.8 1.8 0 0 0 2.525 1.591L8.903 22c1.007.269 2.046.403 3.088.4a10.614 10.614 0 0 0 11.001-10.7 10.616 10.616 0 0 0-11-10.7Zm0 19.4a9.857 9.857 0 0 1-2.635-.35 1.799 1.799 0 0 0-1.196.092l-1.714.756-.045-1.493A1.81 1.81 0 0 0 5.8 18.13 8.488 8.488 0 0 1 2.99 11.7a8.66 8.66 0 0 1 9-8.7 8.705 8.705 0 1 1 0 17.4Zm3.735-11.815-2.313 2.755-3.347-2.056a.998.998 0 0 0-1.289.21L5.725 13.13a1 1 0 1 0 1.532 1.285l2.498-2.975 3.346 2.056a.998.998 0 0 0 1.29-.21l2.866-3.415a1 1 0 1 0-1.532-1.286Z'
    />
  </svg>
);
export default SvgIconFacebookMessengerAlt;
