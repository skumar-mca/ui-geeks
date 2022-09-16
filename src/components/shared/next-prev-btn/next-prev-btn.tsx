import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { AppPrefix } from '../../../util/app-constants';
import ChevronLeft from '../../icons/chevron-left';
import ChevronRight from '../../icons/chevron-right';
import { B, NewLine } from '../util/util';
import YALSButton from '../yals-button/yals-button';
import {
  YALSButtonSizeTypes,
  YALSButtonVariantTypes
} from '../yals-button/yals-button.types';
import YALSFlex from '../yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../yals-flex/yals-flex.types';
import './next-prev-btn.scss';
import { INextPrevBtnProp } from './next-prev-btn.types';

const NextPrevButtons = (props: INextPrevBtnProp) => {
  const { allItems } = props;
  const navigate = useNavigate();
  const currentPath = useCurrentPath();

  const prevNextBtnClasses = classNames({
    [`${AppPrefix}-prev-next-btn`]: true
  });

  const [prevIndex, setPrevIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(-1);

  const getNextPrevItems = () => {
    let prev = -1;
    let next = -1;

    const itemIndex = allItems.findIndex((itm) => itm.link === currentPath);

    if (itemIndex > 0) {
      prev = itemIndex - 1;
    }

    if (itemIndex < allItems.length - 1) {
      next = itemIndex + 1;
    }

    setPrevIndex(() => prev);
    setNextIndex(() => next);
  };

  useEffect(() => {
    getNextPrevItems();
  }, [currentPath]);

  const onHandleClick = (indx: number) => {
    navigate(allItems[indx].link);
  };

  return (
    <div className={prevNextBtnClasses}>
      <YALSFlex justifyContent={FlexJustifyContentTypes.SpaceBetween}>
        {prevIndex > -1 && (
          <YALSButton
            onClick={onHandleClick.bind(this, prevIndex)}
            outline={false}
            size={YALSButtonSizeTypes.Large}
            variant={YALSButtonVariantTypes.Dark}
          >
            <div className='prev-button'>
              <ChevronLeft fillColor='white' width={22} height={20} />
              <B>Prev</B>
              <NewLine />
            </div>

            <span className='route-link'>{allItems[prevIndex].label}</span>
          </YALSButton>
        )}

        {nextIndex > -1 && (
          <YALSButton
            onClick={onHandleClick.bind(this, nextIndex)}
            outline={false}
            size={YALSButtonSizeTypes.Large}
            variant={YALSButtonVariantTypes.Dark}
          >
            <div className='next-button'>
              <B>Next</B>
              <ChevronRight fillColor='white' width={22} height={20} />
              <NewLine />
            </div>
            <span className='route-link'>{allItems[nextIndex].label}</span>
          </YALSButton>
        )}
      </YALSFlex>
    </div>
  );
};

export default NextPrevButtons;
