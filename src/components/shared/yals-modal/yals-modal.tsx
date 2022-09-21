import classNames from 'classnames';
import React, { memo } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import { AppPrefix } from '../../../util/app-constants';
import './yals-modal.scss';
import { IYALSModalProps } from './yals-modal.types';

const YALSModal = (props: IYALSModalProps) => {
  const { show, fullScreen, modalHeader, modalContent, onHide } = props;

  const modalClasses = classNames({
    [`${AppPrefix}-modal`]: true
  });

  const isFullScreen = fullScreen ? true : 'false';

  return (
    <Modal
      className={modalClasses}
      show={show}
      fullscreen={isFullScreen}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalHeader}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalContent}</Modal.Body>
    </Modal>
  );
};

export default memo(YALSModal);
