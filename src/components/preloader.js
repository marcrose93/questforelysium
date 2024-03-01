import React from 'react';
import { Loader } from 'rsuite';

const Preloader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999, // Ensure the loader appears on top of other content
    }}>
      <Loader size="md" content="Loading Your Experience..." backdrop center />
    </div>
  );
};

export default Preloader;
