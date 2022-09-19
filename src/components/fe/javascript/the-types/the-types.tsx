import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, OrderedList } from '../../../shared/util/util';
import Word from '../../../shared/word/word';
import JSBigIntType from './big-int-type';
import JSBooleanType from './boolean-type';
import JSNullType from './null-type';
import JSNumberType from './number-type';
import JSStringType from './string-type';
import JSSymbolType from './symbol-type';
import JSUndefinedType from './undefined-type';

const JSTypes = () => {
  useDOMTitle('YALS: JavaScript | Data Types');

  const dataTypes: Array<IOrderedListItemType> = [
    {
      label: 'Number'
    },
    {
      label: 'BigInt'
    },
    {
      label: 'String'
    },
    {
      label: 'Boolean'
    },
    {
      label: 'Symbol'
    },
    {
      label: 'Object',
      items: [
        {
          label: 'Function'
        },
        {
          label: 'Array'
        },
        {
          label: 'Date'
        },
        {
          label: 'RegExp'
        }
      ]
    },
    {
      label: 'null'
    },
    {
      label: 'undefined'
    }
  ];

  return (
    <Container>
      <Heading>
        Building block of JavaScript: <Word italic>the types</Word>
      </Heading>

      <Para>
        Primarily there are <B>7</B> types in JavaScript:
        <OrderedList
          unOrdered
          items={[
            {
              label: 'Number, BigInt, String, Boolean, Function, Object, Symbol'
            }
          ]}
        />
      </Para>

      <Para>
        But there are couple of other types too available in JavaScript
        <OrderedList
          unOrdered
          items={[{ label: 'undefined, null, Array, Date, RegExp' }]}
        />
      </Para>

      <Para>
        Also <BI>functions</BI> <Space /> are just special type of
        <BI>object</BI> <Space /> (because functions are treated as first-class
        functions). On Summarizing all, the type diagram will look something
        like:
      </Para>

      <Para>
        <OrderedList items={dataTypes} unOrdered />
      </Para>

      <Note>
        There are some built-in <B>Error</B> types as well.
      </Note>

      <Para>Let's learn each type in detail.</Para>

      <JSNumberType />

      <JSStringType />

      <JSBigIntType />

      <JSSymbolType />

      <JSNullType />

      <JSUndefinedType />

      <JSBooleanType />
    </Container>
  );
};

export default memo(JSTypes);
