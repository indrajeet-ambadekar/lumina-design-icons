import * as React from "react";
const SvgJavaScript = ({ title, titleId, ...props }) => (
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
      d='M14.478 14.883a4.06 4.06 0 0 1-2.187-.398 1.44 1.44 0 0 1-.536-1.01.22.22 0 0 0-.227-.22 47 47 0 0 0-.95 0 .21.21 0 0 0-.23.186 2.34 2.34 0 0 0 .752 1.844c.64.5 1.418.792 2.229.839.845.098 1.7.061 2.533-.108a3.13 3.13 0 0 0 1.678-.904 2.34 2.34 0 0 0 .396-2.231 1.87 1.87 0 0 0-1.23-1.095c-1.281-.45-2.665-.415-3.97-.757-.227-.07-.504-.148-.605-.388a.85.85 0 0 1 .284-.955c.41-.234.877-.35 1.349-.336a4.1 4.1 0 0 1 1.884.27 1.44 1.44 0 0 1 .687.992.243.243 0 0 0 .227.236c.315.006.63.001.944.002a.23.23 0 0 0 .247-.168 2.43 2.43 0 0 0-1.187-2.106 5.9 5.9 0 0 0-3.218-.493 3.5 3.5 0 0 0-2.176.875 2.17 2.17 0 0 0-.434 2.262 1.93 1.93 0 0 0 1.218 1.062c1.276.461 2.675.313 3.964.721.252.085.544.216.62.495a.99.99 0 0 1-.269.946 2.97 2.97 0 0 1-1.793.439m5.819-8.445q-3.738-2.115-7.479-4.225a1.68 1.68 0 0 0-1.637 0L3.729 6.421a1.54 1.54 0 0 0-.804 1.342v8.475a1.55 1.55 0 0 0 .835 1.355c.714.388 1.407.816 2.134 1.178a3.06 3.06 0 0 0 2.738.076 2.13 2.13 0 0 0 .995-1.921c.005-2.797 0-5.594.002-8.39a.22.22 0 0 0-.207-.255 42 42 0 0 0-.953 0 .21.21 0 0 0-.228.213c-.004 2.779 0 5.558-.003 8.337a.94.94 0 0 1-.609.884 1.53 1.53 0 0 1-1.24-.166l-1.983-1.12a.24.24 0 0 1-.134-.235V7.807a.26.26 0 0 1 .157-.26q3.713-2.092 7.425-4.187a.26.26 0 0 1 .292 0l7.426 4.185a.26.26 0 0 1 .156.262l-.001 8.387a.24.24 0 0 1-.133.238 4853 4853 0 0 1-7.317 4.13c-.116.064-.254.169-.39.09-.64-.362-1.271-.738-1.908-1.103a.205.205 0 0 0-.23-.014q-.421.248-.882.412c-.138.056-.308.072-.403.2.121.132.268.237.431.31q1.117.648 2.237 1.293a1.63 1.63 0 0 0 1.655.046q3.726-2.1 7.452-4.204a1.56 1.56 0 0 0 .835-1.354V7.763a1.54 1.54 0 0 0-.777-1.325'
    />
  </svg>
);
export default SvgJavaScript;
