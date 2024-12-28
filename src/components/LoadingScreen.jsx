import { useProgress } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ started, setStarted }) => {
  const { progress } = useProgress();
  const name = 'Korolev Portfolio';

  const [isYellow, setIsYellow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsYellow((prevIsYellow) => !prevIsYellow);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setStarted(true);
    }
  }, [progress, setStarted]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-100 transition-opacity duration-500 ${
        started ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative inline-flex">
          <div className="h-10 w-10 rounded-full bg-yellow-500 animate-ping absolute"></div>
          <div className="h-10 w-10 rounded-full bg-yellow-500" />
        </div>
        <div className="mt-4 text-4xl font-bold text-gray-800 flex">
          {name.split('').map((letter, index) => (
            <span key={index} className="relative overflow-hidden">
              <span
                className="text-yellow-500  whitespace-nowrap"
                style={{
                  width: `${(progress / name.length) * (index + 1)}%`,
                }}
              >
                {letter}
              </span>
              <span
                className="absolute inset-0  whitespace-nowrap"
                style={{
                  width: `${(progress / name.length) * (index + 1)}%`,
                  color: isYellow ? 'black' : 'transparent',
                  WebkitTextFillColor: isYellow ? 'black' : 'transparent',
                }}
              >
                {letter}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
