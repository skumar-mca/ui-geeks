import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const IconPDF = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.pdf_d1} d2={IconPath.pdf_d2} />;
};

export default memo(IconPDF);
