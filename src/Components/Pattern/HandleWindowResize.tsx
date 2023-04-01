import { Dispatch, SetStateAction, useEffect } from 'react';

const HandleWindowResize = (
  setWindowSize: Dispatch<SetStateAction<number[]>>
) => {
  useEffect(() => {
    const windowResize = () => {
      setWindowSize([window.innerWidth, window.document.body.offsetHeight]);
    };

    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });

  useEffect(() => {
    setWindowSize([window.innerWidth, window.document.body.offsetHeight]);
  }, [setWindowSize]);
};

export default HandleWindowResize;
