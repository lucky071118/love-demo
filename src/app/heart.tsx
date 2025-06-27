"use client";
import React from "react";

const Heart = () => {
  return (
    <div className="heartbeat-container">
      <svg
        viewBox="0 0 32 29.6"
        width="200"
        height="200"
        className="heartbeat-heart"
        xmlns="http://www.w3.org/2000/svg"
      >
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
        }
        .heartbeat-heart {
          animation: heartbeat 2s infinite;
          transform-origin: center;
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
