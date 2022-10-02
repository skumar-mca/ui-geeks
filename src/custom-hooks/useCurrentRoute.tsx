import { useLocation } from 'react-router-dom';

const useCurrentPath = () => {
  const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  return location.pathname;
};

export default useCurrentPath;
