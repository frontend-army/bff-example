import { useCallback, useState } from 'react';

const useDebouncedFetch = () => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const debouncedFunction = useCallback((url: string, callback: Function) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeout = setTimeout(async () => {
      const response = await fetch(url).then((res) => res.json());
      callback(response);
    }, 1000);
    setTimeoutId(newTimeout);
  }, [timeoutId]);

  return debouncedFunction;
};



export default useDebouncedFetch;
