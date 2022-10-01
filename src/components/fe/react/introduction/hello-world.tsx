import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B } from '../../../shared/util/util';

const ReactHelloWorld = () => {
  return (
    <>
      <Heading as='h2'>Hello World</Heading>
      <Para>The smallest React example looks like this:</Para>

      <Code>
        {`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, World</h1>);`}
      </Code>

      <Para>
        <B>ReactDOM.createRoot</B>: This method creates a root node, on which
        the react app will be mounted/hosted. Everything inside the root node is
        managed by React DOM.
      </Para>

      <Para>
        <B>render()</B>: This method renders/displays the app content on the
        root node.
      </Para>

      <Para>Above code will display a heading saying "Hello, World".</Para>
    </>
  );
};

export default ReactHelloWorld;
