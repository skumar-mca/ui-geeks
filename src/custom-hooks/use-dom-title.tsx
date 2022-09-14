import { useEffect } from 'react';

const useDOMTitle = (title: string) => {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = 'YALS | Yet Another Learning Source';
    };
  }, []);
};

export default useDOMTitle;
