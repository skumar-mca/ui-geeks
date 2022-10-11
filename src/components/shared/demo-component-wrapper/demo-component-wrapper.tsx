import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useNavigate } from 'react-router-dom';
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
  const {
    demoComponentList,
    homePage,
    homePageLabel,
    isSplitView = false
  } = props;

  const navigate = useNavigate();
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

  const navigateToURL = (url?: string) => {
    if (url) {
      navigate(url);
    }
  };
  const redirectToHomePage = () => {
    navigateToURL(homePage);
  };

  const redirectToMoreDetailPage = () => {
    if (currentElemnt.moreDetail) {
      navigateToURL(currentElemnt.moreDetail.link);
    }
  };

  const currentElemnt = demoComponentList[currentIndex];

  return (
    <div
      className={`demo-component ${
        homePageLabel || isSplitView ? 'full-page-demo' : ''
      } `}
      key={`demo-${currentElemnt.id}`}
    >
      <YalsFlex
        flexDirection={FlexDirectionTypes.Column}
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        height={'100%'}
      >
        <div>
          {homePageLabel && (
            <YalsButton onClick={redirectToHomePage} className='back-button'>
              <ChevronLeft />
              <span className='label'>{homePageLabel}</span>
            </YalsButton>
          )}

          {currentElemnt.label && (
            <Heading as='h5'>{currentElemnt.label}</Heading>
          )}

          {currentElemnt.moreDetail && (
            <div className='more-detail-info'>
              <YalsButton
                variant={YALSButtonVariantTypes.Link}
                onClick={redirectToMoreDetailPage}
              >
                {currentElemnt?.moreDetail.label}
              </YalsButton>
            </div>
          )}

          <Row>
            {(viewMode === DemoViewType.VIEW || isSplitView) && (
              <Col
                xs={isSplitView ? 6 : 12}
                sm={isSplitView ? 6 : 12}
                lg={isSplitView ? 6 : 12}
              >
                <div className='demo-view'>{currentElemnt.component}</div>
              </Col>
            )}

            <Col
              xs={isSplitView ? 12 : 12}
              sm={isSplitView ? 6 : 12}
              lg={isSplitView ? 6 : 12}
            >
              {(viewMode === DemoViewType.CODE || isSplitView) && (
                <Code
                  language={
                    currentElemnt.codeLanguage || CodeLanguageTypes.JavaScript
                  }
                >
                  {currentElemnt.code}
                </Code>
              )}
            </Col>
          </Row>
        </div>

        <Row
          className={`${
            demoComponentList.length > 1 ? 'action-button-row' : ''
          }`}
        >
          {!isSplitView && (
            <Col sm={6} md={6} xs={12} lg={6} className='view-mode-col'>
              <YalsButton
                variant={YALSButtonVariantTypes.Primary}
                onClick={toggleViewMode}
              >
                {viewMode === DemoViewType.CODE ? 'Show Demo' : 'Show Code'}
              </YalsButton>
            </Col>
          )}

          {demoComponentList.length > 1 && (
            <Col sm={6} md={6} xs={12} lg={6} className='view-mode-col'>
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
