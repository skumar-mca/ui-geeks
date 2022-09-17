import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './text-carousal.scss';
import { ITextCarousalProps } from './text-carousal.types';

const TextCarousal = (props: ITextCarousalProps) => {
  const { contentList } = props;

  const textCarousalClasses = classNames({
    [`${AppPrefix}-text-carousal`]: true
  });

  const [contentIndex, setContentIndex] = useState(0);
  const [intervalRef, setIntervalRef] = useState(0);

  const incrementIndex = () => {
    setContentIndex((prev: number) => {
      let index = prev;
      if (index === contentList.length - 1) {
        index = -1;
      }
      return index + 1;
    });
  };

  useEffect(() => {
    const timerRef = window.setInterval(() => {
      incrementIndex();
    }, 5000);

    setIntervalRef(timerRef);

    return () => {
      if (intervalRef) {
        window.clearInterval(intervalRef);
      }
    };
  }, []);

  return (
    <div className={textCarousalClasses} key={`item-${contentIndex}`}>
      {contentList[contentIndex].content}
    </div>
  );
};

export default memo(TextCarousal);
