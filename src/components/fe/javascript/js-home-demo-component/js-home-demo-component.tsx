import React from 'react';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import JSHomeDemoStringMethods, {
  JSHomeDemoStringMethodsCode
} from './string-methods';

const JSHomeDemoComponent = () => {
  const demoComponents = [
    {
      id: 1,
      label: 'Perform string formatting.',
      component: <JSHomeDemoStringMethods />,
      code: JSHomeDemoStringMethodsCode
    }
  ];

  return <DemoComponentWrapper demoComponentList={demoComponents} />;
};

export default JSHomeDemoComponent;
