import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import TextTyper from '../../shared/text-typer/text-typer';
import {
  default as YalsFlex,
  default as YALSFlex
} from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './home-intro.scss';
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
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          className='bg-image'
        >
          <img
            src={ImagePaths.APP_IMAGE_WEBP}
            alt='ui-geeks background'
            width={'100%'}
            height={'100%'}
          />
        </YalsFlex>

        <YALSFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          className='intro-section'
        >
          <div>
            <h1 className={`${AppPrefix}-name`}>UI Learning Platform</h1>
            <h2 className={`${AppPrefix}-sub-name`}>
              <TextTyper
                words={['JavaScript', 'React', 'Angular', 'CSS', 'SCSS']}
              />
            </h2>
            <h3 className={`${AppPrefix}-tagline`}>
              "Let's understand UI better"
            </h3>
          </div>
        </YALSFlex>
      </YALSFlex>
    </>
  );
};

export default HomeIntro;
