import * as React from "react";
const SvgGoogle = ({ title, titleId, ...props }) => (
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
      d='M22.602 10.004a1 1 0 0 0-.983-.822H12.2a1 1 0 0 0-1 1v3.868a1 1 0 0 0 1 1h3.963c-.283.476-.67.882-1.132 1.187-.845.536-1.83.81-2.83.786a4.936 4.936 0 0 1-4.647-3.438v-.002a4.904 4.904 0 0 1 0-3.167v-.002A4.936 4.936 0 0 1 12.2 6.978a4.377 4.377 0 0 1 3.132 1.217 1 1 0 0 0 1.398-.015l2.868-2.868a1 1 0 0 0-.025-1.439A10.623 10.623 0 0 0 12.2 1a10.949 10.949 0 0 0-9.828 6.059l-.002.002A10.922 10.922 0 0 0 1.2 12a11.078 11.078 0 0 0 1.17 4.94l.002.001A10.949 10.949 0 0 0 12.2 23a10.525 10.525 0 0 0 7.295-2.687l.001-.001a10.784 10.784 0 0 0 3.304-8.085c0-.745-.065-1.49-.198-2.223ZM12.2 3a8.682 8.682 0 0 1 5.209 1.673l-1.454 1.453A6.463 6.463 0 0 0 12.2 4.978a6.886 6.886 0 0 0-5.99 3.55L5.143 7.7l-.585-.454A8.952 8.952 0 0 1 12.2 3ZM3.68 14.903a9.03 9.03 0 0 1 0-5.806l1.782 1.382a6.854 6.854 0 0 0 0 3.042L3.68 14.902ZM12.2 21a8.953 8.953 0 0 1-7.643-4.246l.378-.294 1.276-.99a6.885 6.885 0 0 0 5.99 3.553 7.278 7.278 0 0 0 3.305-.751l1.692 1.313A8.89 8.89 0 0 1 12.2 21Zm6.526-2.76-.183-.143-1.377-1.069a5.606 5.606 0 0 0 1.4-2.795 1 1 0 0 0-.984-1.183H13.2v-1.868h7.549c.034.345.051.695.051 1.045a9.052 9.052 0 0 1-2.074 6.012Z'
    />
  </svg>
);
export default SvgGoogle;
