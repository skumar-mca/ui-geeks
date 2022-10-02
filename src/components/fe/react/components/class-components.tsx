import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactClassComponents = () => {
  return (
    <>
      <Heading as='h2'>Class Component</Heading>
      <Para>
        We can also use <BI>ES6 class</BI> to define a component. The defined
        <Space /> <I>class</I> should <B>extend</B> <BI>React.Component</BI>.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`class Welcome extends React.Component {
  render() {
    return <h1>Hello from React!</h1>
  }	
}
`}
      </Code>

      <Para>
        <B>render()</B>: A class component should have a render() function,
        which returns the React element.
      </Para>

      <Note>
        Before <B>version 16.8</B>, only class components can be <B>stateful</B>
        <Space /> components. Function components were used as <B>stateless</B>
        <Space /> components. But with the introduction of <B>Hooks in v16.8</B>
        , function components can also be <B>stateful</B>. React prefers
        function components over class components for
        <B>performance benefits</B>.
      </Note>

      <Note>
        Always start component names with a <B>Capital letter</B>. React treats
        components starting with <B>lowercase letters</B> as <B>DOM</B> tags.
        For example, <B>{`<div />`}</B> represents an HTML tag, but <Space />
        <B>{`<Welcome />`}</B> <Space /> represents a component and requires
        <Space /> <B>Welcome</B> to be in scope.
      </Note>

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

export default ReactClassComponents;
