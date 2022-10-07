import classNames from 'classnames';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { AppPrefix } from '../../../util/app-constants';
import OnPageItems from '../on-page-items/on-page-items';
import './navigation-menu.scss';
import { IMenuItem, INavigationMenuProps } from './navigation-menu.types';

const NavigationMenu = (props: INavigationMenuProps) => {
  const { menuList, menuTitle, menuLinks, onMenuClick } = props;
  const menuClasses = classNames({ [`${AppPrefix}-menu-wrapper`]: true });
  const currentPath = useCurrentPath();
  const isSelectedRoute = (url: string) => currentPath === url;

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
                onClick={onMenuClick && onMenuClick.bind(this, itm)}
              >
                {itm.label}

                {menuLinks && isSelectedRoute(itm.url) && (
                  <OnPageItems allItems={menuLinks} onMenuClick={onMenuClick} />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(NavigationMenu);
