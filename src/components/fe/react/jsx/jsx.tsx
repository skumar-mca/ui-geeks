import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI } from '../../../shared/util/util';
import ReactJSXWithChildren from './children-with-jsx';
import ReactJSXPreventsXSS from './jsx-xss';
import ReactJSXRenderingElements from './rendering-elements';
import ReactWhyJSX from './why-jsx';

const ReactJSX = () => {
  useDOMTitle('YALS: React | JSX');

  return (
    <Container>
      <Heading>JSX</Heading>
      <Para>
        It is a syntax extension to JavaScript. JSX may look like a template
        language, but it comes with the full power of JavaScript. JSX produces
        React <BI>"elements"</BI>.
        <Code
          language={CodeLanguageTypes.JSX}
        >{`const element = <h1>Hello, World<h1>`}</Code>
      </Para>

      <Para>
        <ReactWhyJSX />
        <ReactJSXWithChildren />
        <ReactJSXPreventsXSS />
        <ReactJSXRenderingElements />
      </Para>
    </Container>
  );
};

export default ReactJSX;
