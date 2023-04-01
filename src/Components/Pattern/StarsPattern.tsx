import { useState } from 'react';
import HandleWindowResize from './HandleWindowResize';

const StarsPattern = () => {
  const [windowSizes, setWindowSize] = useState<number[]>([]);
  const [windowWidth, windowHeight] = [windowSizes[0], windowSizes[1]];
  HandleWindowResize(setWindowSize);

  return (
    <div
      className='pointer-events-none absolute top-0 left-0 right-0 bg-[url("/Assets/images/seamless-pattern.jpg")] opacity-20'
      style={{ height: windowHeight }}
    />
  );
};

export default StarsPattern;
