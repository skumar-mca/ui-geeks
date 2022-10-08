import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import TextCarousal from '../../shared/text-carousal/text-carousal';
import { NewLine } from '../../shared/util/util';
import YALSButton from '../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../shared/yals-button/yals-button.types';
import YALSFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './language-component.scss';
import { ILanguageProp } from './language-component.types';
const LanguageComponent = (props: ILanguageProp) => {
  const { title, tag, contentList, imagePath, homePagePath, theme } = props;
  const navigate = useNavigate();

  const introHeader = classNames({
    [`${AppPrefix}-language`]: true,
    [`theme-${theme}`]: theme
  });

  const handleRedirect = () => {
    navigate(homePagePath);
  };

  return (
    <>
      <YALSFlex
        className={introHeader}
        justifyContent={FlexJustifyContentTypes.SpaceEvenly}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <div className='language-section'>
          {imagePath && (
            <img src={imagePath} alt={imagePath} className='language-icon' />
          )}

          <h2>{title}</h2>
          <h5>{tag}</h5>
          <div className='carousal-content'>
            <TextCarousal contentList={contentList} />
          </div>

          <NewLine />
          <YALSButton
            variant={YALSButtonVariantTypes.Dark}
            outline={false}
            onClick={handleRedirect}
          >
            Learn Now
          </YALSButton>
        </div>
      </YALSFlex>
    </>
  );
};

export default LanguageComponent;
