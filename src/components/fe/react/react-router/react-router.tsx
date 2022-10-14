import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import ReactRouterIntro from './react-router-intro';
import ReactRouterNavigation from './react-router-navigation';
import ReactRouterRoutes from './react-router-routes';

const ReactRouterComponents = () => {
  useDOMTitle('UI-Geeks: React | Router');

  return (
    <Container>
      <Heading>React Router</Heading>
      <ReactRouterIntro />
      <ReactRouterRoutes />
      <ReactRouterNavigation />
    </Container>
  );
};

export default ReactRouterComponents;
