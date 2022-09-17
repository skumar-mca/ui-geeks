import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { OrderedList } from '../../../shared/util/util';
import JSClassConstructor from './class-constructor';
import JSClassDeclaration from './class-declaration';
import JSClassExpression from './class-expression';
import JSClassPrivateField from './class-private-fields';
import JSClassInheritance from './inheritance/inheritance';
import JSClassStaticMembers from './static-members';
import JSThisWithStaticMembers from './this-with-static-members';

const classDefType = [
  {
    label: 'Class Declaration'
  },
  {
    label: 'Class Expression'
  }
];
const JSClass = () => {
  useDOMTitle('YALS: JavaScript | Class');

  return (
    <Container>
      <Heading>Class</Heading>
      <Para>
        The classes are templates for creating objects. They encapsulate data
        with methods to work on that data. Classes in fact are special
        functions.
      </Para>

      <Para>
        Classes can be defined in two ways:
        <OrderedList items={classDefType} />
      </Para>

      <Para>
        <JSClassDeclaration />
        <JSClassExpression />
        <JSClassConstructor />
        <JSClassStaticMembers />
        <JSThisWithStaticMembers />
        <JSClassPrivateField />
      </Para>

      <Para>
        <JSClassInheritance />
      </Para>
    </Container>
  );
};

export default memo(JSClass);
