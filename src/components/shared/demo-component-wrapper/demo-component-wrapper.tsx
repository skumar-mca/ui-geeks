import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import ChevronLeft from '../../icons/chevron-left';
import ChevronRight from '../../icons/chevron-right';
import Code from '../code/code';
import { CodeLanguageTypes } from '../code/code.types';
import Heading from '../heading/heading';
import YalsButton from '../yals-button/yals-button';
import { YALSButtonVariantTypes } from '../yals-button/yals-button.types';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexDirectionTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import './demo-component-wrapper.scss';
import {
  DemoViewType,
  IDemoWrapperProps
} from './demo-component-wrapper.types';
const DemoComponentWrapper = (props: IDemoWrapperProps) => {
  const { demoComponentList } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState(DemoViewType.VIEW);

  const toggleViewMode = () => {
    setViewMode((prev: string) =>
      prev === DemoViewType.CODE ? DemoViewType.VIEW : DemoViewType.CODE
    );
  };

  const onPrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev: number) => prev - 1);
      setViewMode(() => DemoViewType.VIEW);
    }
  };

  const onNextClick = () => {
    if (currentIndex < demoComponentList.length - 1) {
      setCurrentIndex((prev: number) => prev + 1);
      setViewMode(() => DemoViewType.VIEW);
    }
  };

  return (
    <div
      className='demo-component'
      key={`demo-${demoComponentList[currentIndex].id}`}
    >
      <YalsFlex
        flexDirection={FlexDirectionTypes.Column}
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        height='100%'
      >
        <div>
          <Heading as='h5'>{demoComponentList[currentIndex].label}</Heading>

          {viewMode === DemoViewType.VIEW && (
            <div className='demo-view'>
              {demoComponentList[currentIndex].component}
            </div>
          )}

          {viewMode === DemoViewType.CODE && (
            <Code
              language={
                demoComponentList[currentIndex].codeLanguage ||
                CodeLanguageTypes.JavaScript
              }
            >
              {demoComponentList[currentIndex].code}
            </Code>
          )}
        </div>

        <Row className='action-button-row'>
          <Col sm={6} className='view-mode-col'>
            <YalsButton
              variant={YALSButtonVariantTypes.Primary}
              onClick={toggleViewMode}
            >
              {viewMode === DemoViewType.CODE ? 'See Demo' : 'See Code'}
            </YalsButton>
          </Col>

          {demoComponentList.length > 1 && (
            <Col sm={6} className='view-mode-col'>
              <YalsFlex justifyContent={FlexJustifyContentTypes.End}>
                <YalsButton
                  variant={YALSButtonVariantTypes.Light}
                  disabled={currentIndex <= 0}
                  block
                  className='prev'
                  onClick={onPrevClick}
                  title='See pevious demo'
                >
                  <ChevronLeft />
                </YalsButton>

                <YalsButton
                  variant={YALSButtonVariantTypes.Dark}
                  disabled={currentIndex === demoComponentList.length - 1}
                  block
                  className='next'
                  onClick={onNextClick}
                  title='See next demo'
                >
                  <ChevronRight fillColor='white' />
                </YalsButton>
              </YalsFlex>
            </Col>
          )}
        </Row>
      </YalsFlex>
    </div>
  );
};

export default DemoComponentWrapper;
