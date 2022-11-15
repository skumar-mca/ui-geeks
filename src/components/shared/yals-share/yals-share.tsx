import classNames from 'classnames';
import React, { useContext } from 'react';
import useDeviceType from '../../../custom-hooks/use-device-type';
import {
  AppPrefix,
  DeviceType,
  THEME_CONSTANT
} from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import IconWhatsapp from '../../icons/icon-whatsapp';
import './yals-share.scss';
const YALSShare = () => {
  const currentRoute = location.href;
  const appContext = useContext(AppContext);
  const deviceType = useDeviceType();
  const isMobile = [DeviceType.Mobile, DeviceType.Tablet].includes(deviceType);

  const shareClasses = classNames({
    [`${AppPrefix}-share`]: true
  });

  if (!isMobile) {
    return null;
  }

  return (
    <div className={shareClasses}>
      <span className='share-text'> Share this on:</span>
      <a
        href={`whatsapp://send?text=${currentRoute}`}
        data-action='share/whatsapp/share'
      >
        <IconWhatsapp
          fillColor={
            appContext.theme === THEME_CONSTANT.DARK_THEME ? 'white' : 'green'
          }
        />
      </a>
    </div>
  );
};

export default YALSShare;
