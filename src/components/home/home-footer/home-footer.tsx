import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import { SOCIAL_LINKS } from '../../../util/url-constants';
import IconInstagram from '../../icons/icon-instagram';
import IconLinkedin from '../../icons/icon-linkedin';
import IconTwitter from '../../icons/icon-twitter';
import { B, I } from '../../shared/util/util';
import YalsButton from '../../shared/yals-button/yals-button';
import YalsFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexDirectionTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './home-footer.scss';

const HomeFooter = () => {
  const homeFooter = classNames({ [`${AppPrefix}-home-footer`]: true });

  const iconProps = {
    width: 20,
    height: 20
  };

  return (
    <div className={homeFooter}>
      <YalsFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        flexDirection={FlexDirectionTypes.Column}
        className='detail-footer'
      >
        <div className='social-info'>
          <YalsButton
            noHighlight
            className='icon-twitter'
            target='_blank'
            href={SOCIAL_LINKS.TWITTER}
          >
            <IconTwitter {...iconProps} />
          </YalsButton>

          <YalsButton
            noHighlight
            className='icon-linkedin'
            target='_blank'
            href={SOCIAL_LINKS.LINKEDIN}
          >
            <IconLinkedin {...iconProps} />
          </YalsButton>

          <YalsButton
            noHighlight
            className='icon-instagram'
            target='_blank'
            href={SOCIAL_LINKS.INSTAGRAM}
          >
            <IconInstagram {...iconProps} />
          </YalsButton>
        </div>

        <div className='intro-text'>
          <div className='intro-text-title'>
            <B>UI-Geeks is an online learning platform.</B>
          </div>
          <I>
            Learn Core and Advanced Concepts, Blogs, Summary of JavaScript,
            React, Angular, SCSS, CSS. Content of the website is prepared from
            multiple resources and follows under MIT License and is free to copy
            and distribute.
          </I>
        </div>

        <div className='app-info'>
          <div className='app-name'>
            &#169; {new Date().getFullYear()} UI Geeks | UI Learning Platform.
          </div>

          <div className='app-icon'>
            <img src={ImagePaths.APP_LOGO} />
          </div>
        </div>
      </YalsFlex>
    </div>
  );
};

export default memo(HomeFooter);
