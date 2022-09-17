import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import JSStrictModeIntro from './strict-mode-intro';
import JSStrictModeRestrictions from './strict-mode-restrictions';

const JSStrictMode = () => {
  useDOMTitle('YALS: JavaScript | Strict mode');

  return (
    <Container>
      <Heading>Strict mode</Heading>
      <Para>
        <JSStrictModeIntro />
        <JSStrictModeRestrictions />
      </Para>
    </Container>
  );
};

export default memo(JSStrictMode);
