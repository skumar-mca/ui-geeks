import React from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';
import LandingPageWrapper from '../../../shared/landing-page-wrapper/landing-page-wrapper';
import ReactDefinition from '../introduction/definition';
import { REACT_LINK } from '../react-link-tree';

const ReactLandingPage = () => {
  return (
    <LandingPageWrapper
      linksMenu={REACT_LINK}
      imagePath='images/react-icon.png'
      title='React'
      wordCloudUrl={ImagePaths.REACT.WORD_CLOUD}
    >
      <ReactDefinition />
    </LandingPageWrapper>
  );
};

export default ReactLandingPage;
