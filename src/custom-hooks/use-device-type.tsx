import { useEffect, useState } from 'react';
import { DeviceType } from '../util/app-constants';

const useDeviceType = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  if (width <= 768) {
    return DeviceType.Mobile;
  }

  if (width > 768 && width <= 950) {
    return DeviceType.Tablet;
  }

  return DeviceType.Desktop;
};

export default useDeviceType;
