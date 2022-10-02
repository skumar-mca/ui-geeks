import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import ReactRenderPropsIntro from './render-props-intro';

const ReactRenderProps = () => {
  useDOMTitle('YALS: React | Render Props');
  return (
    <Container>
      <ReactRenderPropsIntro />
    </Container>
  );
};

export default ReactRenderProps;
