import React from 'react';
import useCurrentPath from '../../../../custom-hooks/useCurrentRoute';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import { JS_PRIMARY_ROUTES } from '../js-menu-items';
import JSHomeDemoStringMethods, {
  JSHomeDemoStringMethodsCode
} from './string-methods';

const JSHomeDemoComponent = () => {
  const current = useCurrentPath();
  const isFullPageDemo = current.indexOf('/demoes/') > -1;

  const demoComponents = [
    {
      id: 1,
      label: 'Perform string formatting.',
      component: <JSHomeDemoStringMethods />,
      code: JSHomeDemoStringMethodsCode
    }
  ];

  return (
    <DemoComponentWrapper
      demoComponentList={demoComponents}
      homePage={isFullPageDemo ? JS_PRIMARY_ROUTES.HOME_PAGE.url : undefined}
      homePageLabel={isFullPageDemo ? 'JavaScript' : undefined}
    />
  );
};

export default JSHomeDemoComponent;
