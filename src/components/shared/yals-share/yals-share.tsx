import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import useDeviceType from '../../../custom-hooks/use-device-type';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import {
  AppPrefix,
  DeviceType,
  THEME_CONSTANT
} from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import IconWhatsapp from '../../icons/icon-whatsapp';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import './yals-share.scss';
const YALSShare = () => {
  const currentRoute = useCurrentPath();
  const appContext = useContext(AppContext);
  const deviceType = useDeviceType();
  const isMobile = [DeviceType.Mobile, DeviceType.Tablet].includes(deviceType);

  const shareClasses = classNames({
    [`${AppPrefix}-share`]: true
  });

  useEffect(() => {
    try {
      eval(`window.FB && window.FB.XFBML && window.FB.XFBML.parse()`);
    } catch (e) {}
  }, [currentRoute]);

  if (!isMobile) {
    return null;
  }

  return (
    <div className={shareClasses}>
      <div className='share-text'>Liked the content, please share this:</div>
      <YalsFlex
        justifyContent={FlexJustifyContentTypes.FlexStart}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <a
          href={`whatsapp://send?text=${location.href}`}
          data-action='share/whatsapp/share'
          className='whatsapp-share'
        >
          <IconWhatsapp
            fillColor={
              appContext.theme === THEME_CONSTANT.DARK_THEME ? 'white' : 'green'
            }
          />
        </a>
      </YalsFlex>
    </div>
  );
};

export default YALSShare;
