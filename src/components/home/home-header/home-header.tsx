import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import HomeIcon from '../../icons/home-icon';
import YALSFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import YALSSearch from '../../shared/yals-search/yals-search';
import './home-header.scss';

const HomeHeader = () => {
  const appHeader = classNames({ [`${AppPrefix}-home-header`]: true });

  return (
    <div className={appHeader}>
      <YALSFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <ul className='ul-main-menu'>
          <li>
            <Link to='/'>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link to='/fe/javascript-home'>JavaScript</Link>
          </li>
          <li>
            <Link to='/fe/react-home'>React</Link>
          </li>
        </ul>

        <YALSSearch />
      </YALSFlex>
    </div>
  );
};

export default HomeHeader;
