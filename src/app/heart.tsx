"use client";
import React from "react";

const Heart = () => {
  return (
    <div className="heartbeat-container">
      <svg
        viewBox="-8 -8 48 45.6"
        width="75vw"
        height="75vh"
        className="heartbeat-heart"
        style={{ maxWidth: '75vw', maxHeight: '75vh', width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="heart-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Heart-shaped glow */}
        <g transform="translate(16 14.8)">
          <path
            d="M7.6,-14.8c-2.7,0-5.1,1.3-6.6,3.3C-0.5,-13.5-2.9,-14.8-5.6,-14.8C-11.3,-14.8-16,-10.1-16,-4.4c0,7.1,8.2,13.1,15.2,18.7c0.5,0.4,1.2,0.4,1.7,0C7.8,8.3,16,2.3,16,-4.4C16,-10.1,11.3,-14.8,7.6,-14.8z"
            fill="#ffb3b3"
            opacity="0.7"
            transform="scale(1.25)"
            filter="url(#heart-glow)"
          />
        </g>
        {/* Main heart */}
        <path
          d="M23.6,0c-2.7,0-5.1,1.3-6.6,3.3C15.5,1.3,13.1,0,10.4,0C4.7,0,0,4.7,0,10.4c0,7.1,8.2,13.1,15.2,18.7c0.5,0.4,1.2,0.4,1.7,0
          C23.8,23.5,32,17.5,32,10.4C32,4.7,27.3,0,23.6,0z"
          fill="#e25555"
        />
      </svg>
      <style jsx>{`
        .heartbeat-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #fff;
          /* Prevent scrollbars when heart is large */
          overflow: hidden;
        }
        .heartbeat-heart {
          animation: heartbeat 2s infinite;
          transform-origin: center;
          /* Removed drop-shadow, using heart-shaped glow instead */
          display: block;
          margin: auto;
        }
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          10% {
            transform: scale(1.2);
          }
          20% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Heart;
