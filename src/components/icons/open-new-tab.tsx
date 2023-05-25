import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const OpenNewTabIcon = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.newTab_d1} d2={IconPath.newTab_d2} />;
};

export default memo(OpenNewTabIcon);
