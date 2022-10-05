import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import TextCarousal from '../../shared/text-carousal/text-carousal';
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
          <YALSButton
            variant={YALSButtonVariantTypes.Dark}
            outline={false}
            onClick={handleRedirect}
          >
            Learn Now
          </YALSButton>
        </div>

        <div className='language-intro'>
          {/* <Heading as='h3'>{tag}</Heading> */}
          <h5>{tag}</h5>
          <TextCarousal contentList={contentList} />
        </div>
      </YALSFlex>
    </>
  );
};

export default LanguageComponent;
