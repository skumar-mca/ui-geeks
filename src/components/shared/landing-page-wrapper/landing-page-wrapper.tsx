import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import { TextAlignTypes } from '../../../types/common';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import { buildChildren } from '../../../util/util';
import { IBlogMenuType } from '../../fe/javascript/blogs/javascript-blog-content';
import Heading from '../heading/heading';
import Para from '../para/para';
import { NewLine } from '../util/util';
import YalsButton from '../yals-button/yals-button';
import { YALSButtonVariantTypes } from '../yals-button/yals-button.types';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';

import './landing-page-wrapper.scss';
import { ILandingPageWrapperProps } from './landing-page-wrapper.types';

const LandingPageWrapper = (props: ILandingPageWrapperProps) => {
  const { linksMenu, imagePath, wordCloudUrl, title, children, blogList } =
    props;

  const deviceType = useDeviceType();
  const navigate = useNavigate();

  const homeLandingClass = classNames({ [`${AppPrefix}-landing`]: true });

  const [menuList, setMenuList] = useState<Array<any>>([]);

  const buildMenuList = () => {
    const menuArr: Array<any> = [];
    linksMenu.map((itm: any) => {
      const childList = itm.children ? buildChildren(itm.children, 0, []) : [];
      menuArr.push({
        label: itm.label,
        link: itm.link,
        childList: childList
      });
    });

    setMenuList(() => menuArr);
  };

  const redirectToTopic = (itm: any) => {
    navigate(itm.link);
  };

  const redirectToIntroduction = (itm: any) => {
    navigate(linksMenu[0].link);
  };

  useEffect(() => {
    buildMenuList();
  }, []);

  return (
    <>
      <div className={homeLandingClass}>
        <div className='js-word-count'>
          <img src={wordCloudUrl} width={'100%'} height='250px' />
        </div>

        <div className='landing-content'>
          <YalsFlex
            justifyContent={FlexJustifyContentTypes.Center}
            alignItems={FlexAlignItemsTypes.Center}
          >
            <img src={imagePath} alt={imagePath} className='language-icon' />
          </YalsFlex>
          <YalsFlex
            justifyContent={FlexJustifyContentTypes.Center}
            alignItems={FlexAlignItemsTypes.Center}
          >
            <h1>{title}</h1>
          </YalsFlex>
          <NewLine />
          <NewLine />

          {children}

          <Para marginBottom='6rem' textAlign={TextAlignTypes.Center}>
            <YalsButton
              variant={YALSButtonVariantTypes.Primary}
              onClick={redirectToIntroduction}
              block={deviceType === DeviceType.Mobile}
            >
              Explore Now
            </YalsButton>
          </Para>
          <div className='content-details-section'>
            <Para>
              <Heading as='h1'>Course Content</Heading>
            </Para>
            <Para>
              <YalsFlex
                justifyContent={FlexJustifyContentTypes.SpaceAround}
                className='topic-list'
              >
                {menuList.map((menu: any) => {
                  return (
                    <div className='insight' key={menu.label}>
                      <YalsButton
                        onClick={redirectToTopic.bind(this, menu)}
                        variant={YALSButtonVariantTypes.Clear}
                      >
                        <div className='insight-value'>{menu.label}</div>
                        {menu.childList.length > 0 && (
                          <div className='insight-key'>
                            {menu.childList.length + 1} Topics
                          </div>
                        )}
                      </YalsButton>
                    </div>
                  );
                })}
              </YalsFlex>
            </Para>

            {blogList && (
              <>
                <Para>
                  <Heading as='h1'>Blogs</Heading>
                </Para>
                <Para>
                  <YalsFlex
                    justifyContent={FlexJustifyContentTypes.SpaceAround}
                    className='topic-list'
                  >
                    {blogList.map((blog: IBlogMenuType) => {
                      return (
                        <div className='insight' key={blog.label}>
                          <YalsButton
                            onClick={redirectToTopic.bind(this, blog)}
                            variant={YALSButtonVariantTypes.Clear}
                          >
                            <div className='insight-value'>{blog.label}</div>
                          </YalsButton>
                        </div>
                      );
                    })}
                  </YalsFlex>
                </Para>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(LandingPageWrapper);
