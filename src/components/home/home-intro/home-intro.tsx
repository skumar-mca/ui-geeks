import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import TextTyper from '../../shared/text-typer/text-typer';
import YALSFlex from '../../shared/yals-flex/yals-flex';
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
        justifyContent={FlexJustifyContentTypes.Center}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <YALSFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          className='intro-section'
        >
          <div>
            <h1 className='yals-name'>Yet Another...</h1>
            <h2 className='yals-sub-name'>
              <TextTyper
                words={['Learning Source', 'Learning Portal', 'Learning Point']}
              />
            </h2>
            <h3 className='yals-tagline'> - Let's learn together!</h3>
          </div>
        </YALSFlex>
      </YALSFlex>
    </>
  );
};

export default HomeIntro;
