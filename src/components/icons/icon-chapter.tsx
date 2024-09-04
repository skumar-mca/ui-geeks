import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const IconChapter = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.chapter} />;
};

export default memo(IconChapter);
