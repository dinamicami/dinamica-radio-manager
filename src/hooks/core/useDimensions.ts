import { useState, useEffect, useLayoutEffect, RefObject } from 'react';

export function useDimensions(targetRef: RefObject<HTMLElement>) {
  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    handleResize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return dimensions;
}