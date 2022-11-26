import React from 'react';
import { useState } from 'react';

const Cup = () => {
  const [hoverParams, setHoverParams] = useState({
    color: '#0B0C10',
    border: '2',
    scale: '1',
  });

  const hoverChangeParams = () => {
    setHoverParams({ color: '#66FCF1', border: '0', scale: '1.17' });
  };

  const unhoverChangeParams = () => {
    setHoverParams({ color: '#0B0C10', border: '2', scale: '1' });
  };

  const biggerIcon = () => {
    setHoverParams({ ...hoverParams, scale: '1.17' });
  };

  const smallerIcon = () => {
    setHoverParams({ ...hoverParams, scale: '1' });
  };

  return (
    <svg
      width="51"
      height="45"
      viewBox="0 0 51 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={hoverChangeParams}
      onMouseOut={unhoverChangeParams}
      onMouseDown={smallerIcon}
      onMouseUp={biggerIcon}
      style={{ transform: `scale(${hoverParams.scale})` }}
    >
      <path
        d="M14.9081 23.4619C14.3526 21.868 14.0681 20.1643 14.0681 18.4466L14.0681 3.84216C14.0681 2.73759 14.9635 1.84216 16.0681 1.84216L34.674 1.84216C35.7786 1.84216 36.674 2.73759 36.674 3.84216L36.674 18.4466C36.674 20.1643 36.3895 21.868 35.834 23.4619C35.2786 25.0557 34.4611 26.5137 33.4215 27.7493C32.3817 28.9852 31.1379 29.9766 29.7555 30.6572C28.3723 31.3382 26.8819 31.6922 25.3711 31.6922C23.8602 31.6922 22.3698 31.3382 20.9866 30.6572C19.6042 29.9766 18.3604 28.9852 17.3206 27.7493C16.281 26.5137 15.4635 25.0557 14.9081 23.4619Z"
        fill={hoverParams.color}
        stroke="#66FCF1"
        stroke-width={hoverParams.border}
        stroke-miterlimit="10"
      />
      <path
        d="M16.4529 43.6871C15.9006 43.6871 15.4448 43.2363 15.5309 42.6907C16.1324 38.8781 20.1387 35.9199 24.9895 35.9199C29.8403 35.9199 33.8644 38.8781 34.4687 42.6908C34.5552 43.2363 34.0994 43.6871 33.5471 43.6871L16.4529 43.6871Z"
        fill={hoverParams.color}
        stroke="#66FCF1"
        stroke-width={hoverParams.border}
        stroke-miterlimit="10"
      />
      <path
        d="M27.7453 31.7378C28.3131 31.7146 28.7862 32.1686 28.7862 32.737V34.8875C28.7862 35.4523 28.3188 35.905 27.7544 35.887L22.8771 35.7317C22.3374 35.7145 21.9089 35.2721 21.9089 34.7322V32.9367C21.9089 32.4004 22.3321 31.9595 22.868 31.9376L27.7453 31.7378Z"
        fill={hoverParams.color}
        stroke="#66FCF1"
        stroke-width={hoverParams.border}
        stroke-miterlimit="10"
      />
      <path
        d="M36.9999 5L36.9999 19.5773C36.9999 20.9276 38.3987 22.01 39.7599 21.2775C42.6089 19.7444 48.9294 15.2357 49.9584 5.16379C50.0796 3.97739 49.1317 3 47.9872 3L38.9999 3C37.8954 3 36.9999 3.89543 36.9999 5ZM41.116 6.9351L44.9431 6.9351C44.4334 10.3437 42.5591 13.1391 41.116 14.8446L41.116 6.9351Z"
        fill={hoverParams.color}
        stroke="#66FCF1"
        stroke-width={hoverParams.border}
        stroke-miterlimit="10"
      />
      <path
        d="M13.9999 5L13.9999 19.5773C13.9999 20.9276 12.6012 22.01 11.24 21.2775C8.391 19.7444 2.07047 15.2357 1.04146 5.16379C0.920256 3.97739 1.86818 3 3.01266 3L11.9999 3C13.1045 3 13.9999 3.89543 13.9999 5ZM9.88384 6.9351L6.0568 6.9351C6.56645 10.3437 8.44081 13.1391 9.88384 14.8446L9.88384 6.9351Z"
        fill={hoverParams.color}
        stroke="#66FCF1"
        stroke-width={hoverParams.border}
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Cup;
