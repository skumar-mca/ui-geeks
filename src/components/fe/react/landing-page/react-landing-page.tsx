import React from 'react';
import LandingPageWrapper from '../../../shared/landing-page-wrapper/landing-page-wrapper';
import ReactDefinition from '../introduction/definition';
import { REACT_LINK } from '../react-link-tree';

const ReactLandingPage = () => {
  return (
    <LandingPageWrapper
      linksMenu={REACT_LINK}
      imagePath='images/react-icon.png'
      title='React'
      wordCloudUrl='https://live.staticflickr.com/65535/52383011714_14b54b9e25_b.jpg'
    >
      <ReactDefinition />
    </LandingPageWrapper>
  );
};

export default ReactLandingPage;
