import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, I, IU } from '../../../shared/util/util';

const ReactClassComponentProperties = () => {
  return (
    <>
      <Heading as='h3'>Class Properties</Heading>
      <Heading as='h4'>defaultProps</Heading>
      <Para>
        It can be defined as a property on the component class itself, to set
        the <I>default props</I> for the <I>class</I>. This is used for
        <Space /> <BI>undefined</BI> props, but not for <BI>null</BI> props.
      </Para>

      <Heading as='h4'>displayName</Heading>
      <Para>
        The <BI>displayName</BI> string is used in debugging messages. Usually,
        we don't need to set it explicitly because it's inferred from the name
        of the function or class component.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>{`Welcome.displayName = "Welcome Component";`}</Code>
      </Para>
    </>
  );
};

export default ReactClassComponentProperties;
