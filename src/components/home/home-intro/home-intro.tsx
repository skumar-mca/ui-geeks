import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import {
  default as YALSFlex,
  default as YalsFlex
} from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexDirectionTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './home-intro.scss';
const languagesList = [
  'JavaScript',
  'React',
  'Angular',
  'CSS',
  'SCSS',
  'TypeScript',
  'Next.Js',
  'Node Js'
];
const HomeIntro = () => {
  const homeIntro = classNames({ [`${AppPrefix}-home-intro`]: true });

  return (
    <>
      <YALSFlex
        className={homeIntro}
        justifyContent={FlexJustifyContentTypes.SpaceAround}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <YalsFlex
          justifyContent={FlexJustifyContentTypes.SpaceAround}
          alignItems={FlexAlignItemsTypes.Center}
          flexDirection={FlexDirectionTypes.Row}
          className='bg-image w-100'
        >
          <div>
            <div className='site-name ui-geeks-name'>
              <span className='ui'>UI</span>
              <span className='geeks'>Geeks</span>
            </div>

            <div className='intro-section'>
              <h1 className={`${AppPrefix}-tagline`}>"UI Learning Platform"</h1>
            </div>
          </div>

          <div>
            <img
              src={ImagePaths.UI_GEEKS_HOME_IMAGE}
              alt='UI Geeks'
              className='home-intro-img'
            />
          </div>
        </YalsFlex>
      </YALSFlex>
    </>
  );
};

export default HomeIntro;
