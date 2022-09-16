import classNames from 'classnames';
import React from 'react';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { AppPrefix } from '../../../util/app-constants';
import SearchIcon from '../../icons/search-icon';
import YALSFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './home-intro.scss';
const HomeIntro = () => {
  const introHeader = classNames({ [`${AppPrefix}-home-intro`]: true });
  return (
    <>
      <YALSFlex
        className={introHeader}
        justifyContent={FlexJustifyContentTypes.Center}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <YALSFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          className='intro-section'
        >
          <div>
            <h1 className='yals-name'>Yet Another Learning Source</h1>

            <h3 className='yals-tagline'>Let's learn together!</h3>

            <YALSFlex
              justifyContent={FlexJustifyContentTypes.Center}
              alignItems={FlexAlignItemsTypes.Center}
              className='yals-search'
            >
              <InputGroup className='yals-search-input'>
                <Form.Control
                  placeholder='search...'
                  aria-label='search content'
                  aria-describedby='search-icon'
                />
                <InputGroup.Text id='search-icon'>
                  <SearchIcon fillColor='white' />
                </InputGroup.Text>
              </InputGroup>
            </YALSFlex>
          </div>
        </YALSFlex>
      </YALSFlex>
    </>
  );
};

export default HomeIntro;
