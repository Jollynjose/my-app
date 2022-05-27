import React, { FC } from 'react';
import { ReactProps } from './MainLayout';

export const DarkLayout: FC<ReactProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark-Layout</h3>
      {children}
    </div>
  );
};
