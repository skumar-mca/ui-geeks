import React from 'react';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import Space from '../../../shared/space/space';
import { IU, NewLine } from '../../../shared/util/util';
import ReactDemoList, {
  ReactDemoListCode
} from '../react-home-demo-component/list-demo';

const ReactListExample = () => {
  const demoComponents = [
    {
      id: 1,
      component: <ReactDemoList />,
      code: ReactDemoListCode,
      codeLanguage: CodeLanguageTypes.JSX
    }
  ];

  return (
    <>
      <IU>Example:</IU>
      <Space />
      Displaying first 10 numbers and also showing whether number is "Even" or
      "Odd".
      <NewLine />
      <NewLine />
      <DemoComponentWrapper
        demoComponentList={demoComponents}
        homePage={undefined}
        homePageLabel={undefined}
        isSplitView={true}
      />
    </>
  );
};

export default ReactListExample;
