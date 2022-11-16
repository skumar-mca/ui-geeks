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
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import './yals-share.scss';
const YALSShare = () => {
  const currentRoute = location.href;
  const appContext = useContext(AppContext);
  const deviceType = useDeviceType();
  const isMobile = [DeviceType.Mobile, DeviceType.Tablet].includes(deviceType);

  const shareClasses = classNames({
    [`${AppPrefix}-share`]: true
  });

  return (
    <div className={shareClasses}>
      <div className='share-text'> Share this on:</div>
      <YalsFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        alignItems={FlexAlignItemsTypes.Center}
      >
        {isMobile && (
          <a
            href={`whatsapp://send?text=${currentRoute}`}
            data-action='share/whatsapp/share'
            className='whatsapp-share'
          >
            <IconWhatsapp
              fillColor={
                appContext.theme === THEME_CONSTANT.DARK_THEME
                  ? 'white'
                  : 'green'
              }
            />
          </a>
        )}

        <div
          className='fb-like'
          data-href={currentRoute}
          data-height='20px'
          data-layout='button_count'
          data-action='like'
          data-size='small'
          data-share='true'
          data-lazy={true}
          data-colorscheme={
            appContext.theme === THEME_CONSTANT.DARK_THEME ? 'dark' : 'light'
          }
        ></div>
      </YalsFlex>
    </div>
  );
};

export default YALSShare;
