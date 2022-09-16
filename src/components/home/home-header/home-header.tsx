import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './home-header.scss';

const HomeHeader = () => {
  const appHeader = classNames({ [`${AppPrefix}-home-header`]: true });
  return (
    <div className={appHeader}>
      <ul className='ul-main-menu'>
        <li>
          <a href='#'>Languages</a>
        </li>
        <li>
          <a href='#'>Tutorials</a>
        </li>
      </ul>
    </div>
  );
};

export default HomeHeader;
