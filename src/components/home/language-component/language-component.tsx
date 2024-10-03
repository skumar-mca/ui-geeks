import classNames from 'classnames';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import { AppPrefix } from '../../../util/app-constants';
import BookmarkIcon from '../../icons/bookmark-icon';
import TopicBooks from '../../shared/topic-books/topic-books';
import { NewLine } from '../../shared/util/util';
import { default as YalsButton } from '../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../shared/yals-button/yals-button.types';
import YalsFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './language-component.scss';
import {
  ILanguageCarousalItemType,
  ILanguageProp
} from './language-component.types';
const LanguageComponent = (props: ILanguageProp) => {
  const {
    title,
    tag,
    contentList,
    imagePath,
    homePagePath,
    theme,
    demoComponent,
    demoLink,
    keyPoints
  } = props;
  const navigate = useNavigate();

  const deviceType = useDeviceType();
  const introHeader = classNames({
    [`${AppPrefix}-language`]: true,
    [`theme-${theme}`]: theme
  });

  const handleRedirect = () => {
    navigate(homePagePath);
  };

  return (
    <div className={introHeader}>
      <div className='language-section'>
        <YalsFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          className='language-img-title'
        >
          <div>
            <YalsButton
              variant={YALSButtonVariantTypes.Link}
              onClick={handleRedirect}
            >
              {imagePath && (
                <img
                  src={imagePath}
                  alt={imagePath}
                  className='language-icon'
                />
              )}
            </YalsButton>
            <h2>{title}</h2>
            <h3>{tag}</h3>
          </div>
        </YalsFlex>

        <YalsFlex
          justifyContent={FlexJustifyContentTypes.SpaceAround}
          alignItems={FlexAlignItemsTypes.Center}
          className='language-details'
        >
          <YalsFlex
            justifyContent={FlexJustifyContentTypes.SpaceBetween}
            alignItems={FlexAlignItemsTypes.Center}
            className='section-1'
          >
            <YalsFlex>{keyPoints}</YalsFlex>
          </YalsFlex>

          <YalsFlex
            justifyContent={FlexJustifyContentTypes.Center}
            alignItems={FlexAlignItemsTypes.Center}
            className='section-2'
          >
            <YalsFlex justifyContent={FlexJustifyContentTypes.Center}>
              <TopicBooks title={title} />
            </YalsFlex>
          </YalsFlex>

          <YalsFlex
            justifyContent={FlexJustifyContentTypes.Center}
            alignItems={FlexAlignItemsTypes.Center}
            className='section-3'
          >
            <div className='topic-key-points'>
              <ul>
                {contentList.map((itm: ILanguageCarousalItemType) => {
                  return (
                    <li>
                      <BookmarkIcon height={15} width={15} /> {itm.content}
                    </li>
                  );
                })}
              </ul>
            </div>
          </YalsFlex>
        </YalsFlex>

        <YalsButton
          variant={YALSButtonVariantTypes.Primary}
          className='explore-btn'
          onClick={handleRedirect}
        >
          Explore Now
        </YalsButton>
        <NewLine />
        <NewLine />
      </div>
    </div>
  );
};

export default memo(LanguageComponent);
