import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SecondsCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const formattedCount = count.toString().padStart(6, '0');

  return (
    <div className="counter-container">
      <h1>contador de segundos</h1>
      <div className="digit-container">
      <FontAwesomeIcon icon={faClock} className="clock-icon" />
        {formattedCount.split('').map((digit, index) => (
          <span key={index} className="digit">
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}
export default SecondsCounter;