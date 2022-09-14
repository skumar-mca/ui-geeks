import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './yals-image.scss';
import { IYALSImageProps } from './yals-image.types';

const YALSImage = (props: IYALSImageProps) => {
  const { imagePath, imageTitle, alt, height = 'auto', width = 'auto' } = props;

  const imageClasses = classNames({ [`${AppPrefix}-image`]: true });

  return (
    <div className={imageClasses}>
      <img height={height} width={width} src={imagePath} alt={alt} />
      {imageTitle && <div className='img-title'>{imageTitle}</div>}
    </div>
  );
};

export default YALSImage;
