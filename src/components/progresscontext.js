// ProgressContext.js
import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [percent, setPercent] = useState(30);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? 'success' : null;
  const color = percent === 100 ? '#52c41a' : '#3385ff';

  return (
    <ProgressContext.Provider value={{ percent, decline, increase, color, status }}>
      {children}
    </ProgressContext.Provider>
  );
};
