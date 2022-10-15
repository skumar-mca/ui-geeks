import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import ChevronRight from '../../icons/chevron-right';
import OnPageItems from '../on-page-items/on-page-items';
import './navigation-menu.scss';
import { IMenuItem, INavigationMenuProps } from './navigation-menu.types';

const NavigationMenu = (props: INavigationMenuProps) => {
  const { menuList, menuTitle, menuLinks, onMenuClick } = props;
  const menuClasses = classNames({ [`${AppPrefix}-menu-wrapper`]: true });
  const currentPath = useCurrentPath();
  const isSelectedRoute = (url: string) => currentPath === url;

  const deviceType = useDeviceType();

  const [showSubMenu, setShowSubMenu] = useState(true);

  const handleMenuClick = (itm: IMenuItem) => {
    onMenuClick && onMenuClick.bind(this, itm);
    setShowSubMenu((prev: boolean) => !prev);
  };

  useEffect(() => {
    setShowSubMenu(() => true);
  }, [currentPath]);

  return (
    <div className={menuClasses}>
      {menuTitle && <span className='menu-title'>{menuTitle}</span>}
      <ul className='menu-ul'>
        {menuList.map((itm: IMenuItem) => {
          return (
            <li key={itm.url}>
              <Link
                to={itm.url}
                className={isSelectedRoute(itm.url) ? 'selected' : ''}
                onClick={handleMenuClick.bind(this, itm)}
              >
                <span className='link-label'> {itm.label}</span>
                {deviceType !== DeviceType.LargeDesktop &&
                  isSelectedRoute(itm.url) && (
                    <span
                      className={`arrow ${
                        showSubMenu ? 'arrow-down' : 'arrow-right'
                      }`}
                    >
                      <ChevronRight />
                    </span>
                  )}
              </Link>

              {showSubMenu &&
                deviceType !== DeviceType.LargeDesktop &&
                menuLinks &&
                isSelectedRoute(itm.url) && (
                  <div className='sub-menu'>
                    <OnPageItems
                      allItems={menuLinks}
                      onMenuClick={onMenuClick}
                    />
                  </div>
                )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(NavigationMenu);
