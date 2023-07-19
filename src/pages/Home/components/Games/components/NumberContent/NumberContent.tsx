import { useEffect, useState } from 'react';

interface NumberCounterProps {
  start: number;
  end: number;
  duration: number;
}

export function NumberCounter({ start, end, duration }: NumberCounterProps) {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    const increment = Math.ceil((end - start) / (duration / 16));
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => {
        const newCurrent = prevCurrent + increment;
        return newCurrent >= end ? end : newCurrent;
      });
    }, 16);

    return () => {
      clearInterval(interval);
    };
  }, [start, end, duration]);

  return <span>{current.toFixed(2).replace('.', ',')}</span>;
}
