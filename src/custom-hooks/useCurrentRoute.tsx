import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../util/util';

const useCurrentPath = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return location.pathname;
};

export default useCurrentPath;
