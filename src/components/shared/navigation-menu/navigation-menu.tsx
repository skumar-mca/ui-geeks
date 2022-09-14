import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import './navigation-menu.scss';
import { IMenuItem, INavigationMenuProps } from './navigation-menu.types';

const NavigationMenu = (props: INavigationMenuProps) => {
  const { menuList, menuTitle = 'Navigation' } = props;
  const menuClasses = classNames({ [`${AppPrefix}-menu-wrapper`]: true });

  return (
    <div className={menuClasses}>
      <span className='menu-title'>{menuTitle}</span>
      <ul className='menu-ul'>
        {menuList.map((itm: IMenuItem) => {
          return (
            <li key={itm.url}>
              <Link to={itm.url}>{itm.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationMenu;
