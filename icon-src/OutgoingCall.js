import * as React from "react";
const SvgOutgoingCall = ({ title, titleId, ...props }) => (
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
      d='M19.44 13c-.22 0-.45-.07-.67-.12a9.4 9.4 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.2 12.2 0 0 1-2.66-2 12.2 12.2 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10 10 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2.742-1.778 3 3 0 0 0 .258-1.232v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.724.962c-.14.043-.29.056-.436.038A17 17 0 0 1 4.07 5.22a1.1 1.1 0 0 1 .25-.82 1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81.174.792.46 1.55l-1.4.65a1 1 0 0 0-.49 1.33 14.5 14.5 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .57-.52l.62-1.4q.776.277 1.58.46.4.09.81.15a1 1 0 0 1 .79 1zm1.92-16.32a1 1 0 0 0-.54-.54 1 1 0 0 0-.38-.08h-4a1 1 0 1 0 0 2h1.58l-3.29 3.3a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l3.3-3.29v1.58a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38'
    />
  </svg>
);
export default SvgOutgoingCall;
