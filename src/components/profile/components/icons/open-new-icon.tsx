import React, { memo } from 'react';

import { IIconType } from '../../../../types/icon.types';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const OpenNewIcon = (props: IIconType) => {
  return (
    <BaseIcon {...props} d={IconPath.open_new_d1} d2={IconPath.open_new_d2} />
  );
};

export default memo(OpenNewIcon);
