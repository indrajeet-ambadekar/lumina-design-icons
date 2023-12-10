import * as React from "react";
const SvgVkAlt = ({ title, titleId, ...props }) => (
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
      d='M15.744 13.53a5.514 5.514 0 0 0-.978-.837 7.873 7.873 0 0 0 2.859-4.471 1 1 0 1 0-1.95-.444 5.86 5.86 0 0 1-3.02 3.903V8.002a.957.957 0 0 0-.044-.216 1.025 1.025 0 0 0-.035-.171.992.992 0 0 0-.167-.25c-.018-.02-.027-.048-.046-.068a1.002 1.002 0 0 0-.246-.167c-.026-.014-.045-.037-.072-.048a1.02 1.02 0 0 0-.236-.049.944.944 0 0 0-.152-.031L11.003 7H11a.995.995 0 0 0-.35 1.929v4.89a11.307 11.307 0 0 1-3.01-5.984 1 1 0 0 0-1.972.334 13.333 13.333 0 0 0 5.4 8.643.98.98 0 0 0 .128.065c.035.02.07.038.108.054.111.045.23.069.35.071a.982.982 0 0 0 .424-.102c.01-.005.022-.002.031-.007a.99.99 0 0 0 .24-.176c.015-.014.024-.03.038-.045a.992.992 0 0 0 .197-.324.987.987 0 0 0 .07-.346v-2.126a3.55 3.55 0 0 1 1.616 1.005l1.648 1.797a.999.999 0 1 0 1.473-1.352l-1.647-1.797ZM15.073 1H8.937C2.78 1 1 2.778 1 8.927v6.136C1 21.22 2.778 23 8.927 23h6.136C21.22 23 23 21.222 23 15.073V8.937C23 2.78 21.222 1 15.073 1ZM21 15.073c0 5.04-.888 5.927-5.938 5.927H8.928C3.887 21 3 20.112 3 15.062V8.928C3 3.887 3.888 3 8.938 3h6.135C20.113 3 21 3.888 21 8.938v6.135Z'
    />
  </svg>
);
export default SvgVkAlt;
