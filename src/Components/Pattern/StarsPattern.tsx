import { useState } from 'react';
import HandleWindowResize from './HandleWindowResize';

const StarsPattern = () => {
  const [windowSizes, setWindowSize] = useState<number[]>([]);
  const [windowWidth, windowHeight] = [windowSizes[0], windowSizes[1]];
  HandleWindowResize(setWindowSize);

  return (
    <div
      className='pointer-events-none absolute left-0 right-0 top-0 bg-[url("/Assets/Images/seamless-pattern.jpg")] opacity-20'
      style={{ height: windowHeight }}
    />
  );
};

export default StarsPattern;