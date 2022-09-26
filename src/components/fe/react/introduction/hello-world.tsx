import React from 'react';
import Code from '../../../shared/code/code';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';

const ReactHelloWorld = () => {
  return (
    <Container>
      <Heading as='h2'>Hello World Program</Heading>
      <Para>The smallest React example looks like this:</Para>

      <Code>
        {`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);`}
      </Code>
    </Container>
  );
};

export default ReactHelloWorld;
