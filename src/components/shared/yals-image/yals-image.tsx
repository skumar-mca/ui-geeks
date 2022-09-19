import classNames from 'classnames';
import React, { memo, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import YalsModal from '../yals-modal/yals-modal';
import './yals-image.scss';
import { IYALSImageProps } from './yals-image.types';

const YALSImage = (props: IYALSImageProps) => {
  const { imagePath, imageTitle, alt, height = 'auto', width = 'auto' } = props;

  const [showInModal, setShowInModal] = useState(false);

  const imageClasses = classNames({ [`${AppPrefix}-image`]: true });

  const toggleImageModal = () => {
    setShowInModal((prev) => !prev);
  };

  const showImageInFullScreen = () => {
    if (showInModal) {
      return;
    }

    setShowInModal((prev) => true);
  };

  const ImageContent = () => {
    return (
      <div className={imageClasses} onClick={showImageInFullScreen}>
        <img
          height={height}
          width={width}
          src={imagePath}
          alt={alt}
          style={{ cursor: showInModal ? 'auto' : 'pointer' }}
        />
        {imageTitle && <div className='img-title'>{imageTitle}</div>}
      </div>
    );
  };

  if (!showInModal) {
    return <ImageContent />;
  }

  return (
    <YalsModal
      modalHeader={alt}
      show={true}
      onHide={toggleImageModal}
      fullScreen={true}
      modalContent={
        <YalsFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          height='100%'
        >
          <ImageContent />
        </YalsFlex>
      }
    />
  );
};

export default memo(YALSImage);
