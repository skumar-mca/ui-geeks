import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../../custom-hooks/use-device-type';
import { TextAlignTypes } from '../../../../types/common';
import { AppPrefix, DeviceType } from '../../../../util/app-constants';
import { buildChildren } from '../../../../util/util';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, NewLine } from '../../../shared/util/util';
import YalsButton from '../../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';
import YalsFlex from '../../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../../shared/yals-flex/yals-flex.types';
import { JSLINK } from '../js-link-tree';
import './javascript-landing.scss';

const JSLandingPage = () => {
  const deviceType = useDeviceType();
  const imagePath = 'images/js-icon.png';
  const homeLandingClass = classNames({ [`${AppPrefix}-js-landing`]: true });

  const [menuList, setMenuList] = useState<Array<any>>([]);
  const [topicsCount, setTopicsCount] = useState(0);
  const buildMenuList = () => {
    const menuArr: Array<any> = [];
    let topicCount = 0;
    JSLINK.map((itm: any) => {
      const childList = itm.children ? buildChildren(itm.children, 0, []) : [];
      topicCount += childList.length;
      menuArr.push({
        label: itm.label,
        link: itm.link,
        childList: childList
      });
    });

    setMenuList(() => menuArr);
    setTopicsCount(() => topicCount);
  };

  const navigate = useNavigate();
  const redirectToTopic = (itm: any) => {
    navigate(itm.link);
  };

  const redirectToIntroduction = (itm: any) => {
    navigate(JSLINK[0].link);
  };

  useEffect(() => {
    buildMenuList();
  }, []);

  return (
    <>
      <div className={homeLandingClass}>
        <div className='js-word-count'>
          <img
            src='https://live.staticflickr.com/65535/52383011714_14b54b9e25_b.jpg'
            width={'100%'}
            height='250px'
          />
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
            <h1>JavaScript</h1>
          </YalsFlex>
          <NewLine />
          <NewLine />
          <Para>
            JavaScript (JS) is a light-weight,
            <B>interpreted</B> <Space /> or <B>just-in-time compiled</B>{' '}
            programming language with <Space /> <B>first-class functions</B>. It
            is
            <B>prototype-based</B>,<B> multi-paradigm</B>,<B>single threaded</B>
            ,<B> dynamic language</B>, supporting <Space />{' '}
            <B>object-oriented</B>,<B> imperative</B> and <Space />{' '}
            <B>declarative</B> styles.
          </Para>

          <Para marginBottom='6rem' textAlign={TextAlignTypes.Center}>
            <YalsButton
              variant={YALSButtonVariantTypes.Primary}
              onClick={redirectToIntroduction}
              block={deviceType === DeviceType.Mobile}
            >
              Explore Now
            </YalsButton>
          </Para>

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
                  <div className='insight'>
                    <YalsButton
                      onClick={redirectToTopic.bind(this, menu)}
                      variant={YALSButtonVariantTypes.Clear}
                    >
                      <div className='insight-value'>{menu.label}</div>
                      <div className='insight-key'>
                        {menu.childList.length + 1} Concepts
                      </div>
                    </YalsButton>
                  </div>
                );
              })}
            </YalsFlex>
          </Para>
        </div>
      </div>
    </>
  );
};

export default JSLandingPage;
