import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{currentTime.format('hh:mm:ss A')}</p>
    </div>
  );
};

export default Clock;