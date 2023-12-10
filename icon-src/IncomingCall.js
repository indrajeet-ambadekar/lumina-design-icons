import * as React from "react";
const SvgIncomingCall = ({ title, titleId, ...props }) => (
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
      d='M15.55 9c.125.047.257.071.39.07h4a1 1 0 1 0 0-2h-1.59l3.29-3.29a1 1 0 1 0-1.41-1.41l-3.29 3.28V4.06a1 1 0 0 0-2 0v4a1 1 0 0 0 .61.94Zm3.89 4c-.22 0-.45-.07-.67-.12a9.443 9.443 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.32 10.32 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2.742-1.778 3 3 0 0 0 .258-1.232v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.724.962c-.14.043-.29.056-.436.038A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82 1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79c.04.273.09.543.15.81.116.527.27 1.045.46 1.55l-1.4.65a1 1 0 0 0-.49 1.33 14.49 14.49 0 0 0 7 7 1 1 0 0 0 .76 0 1.002 1.002 0 0 0 .57-.52l.62-1.4c.517.185 1.045.338 1.58.46.267.06.537.11.81.15a1 1 0 0 1 .79 1l.02 3.12Z'
    />
  </svg>
);
export default SvgIncomingCall;
