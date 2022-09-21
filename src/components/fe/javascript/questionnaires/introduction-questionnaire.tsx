import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const IntroductionQuestions = [
  {
    id: 1,
    question: <>Which of the programming styles are supported by JavaScript?</>,
    options: [
      {
        label: 'Object Oriented',
        id: 1
      },
      {
        label: 'Declarative',
        id: 2
      },
      {
        label: 'Imperative',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'intro_1',
    answer: [1, 2, 3]
  },
  {
    id: 2,
    question: (
      <>
        Modern JavaScript interpreters use technique called {EMPTY_LINE} to
        improve performance.
      </>
    ),
    options: [
      {
        label: 'Compilation',
        id: 1
      },
      {
        label: 'Interpretation',
        id: 2
      },
      {
        label: 'Just in Time Compilation',
        id: 3
      },
      {
        label: 'None of the above',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_2',
    answer: 3
  },
  {
    id: 3,
    question: <>JavaScript support multi-threading.</>,
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: 'false',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_3',
    answer: 2
  },
  {
    id: 4,
    question: (
      <>In JavaScript, functions are treated as first class citizens.</>
    ),
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: `false`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_4',
    answer: 1
  },
  {
    id: 5,
    question: (
      <>
        {EMPTY_LINE} is one, in which operations which are normally done at
        compile time, can be done at run time.
      </>
    ),
    options: [
      {
        label: 'Imperative Language',
        id: 1
      },
      {
        label: `Dynamic Language`,
        id: 2
      },
      {
        label: `Declarative Language`,
        id: 3
      },
      {
        label: `Object Oriented Language`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_5',
    answer: 2
  },
  {
    id: 6,
    question: <>JavaScript is an interpreted language.</>,
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: `false`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_6',
    answer: 1
  },
  {
    id: 7,
    question: (
      <>
        Programming language, where instructions are written in step by step
        manner.
      </>
    ),
    options: [
      {
        label: 'Object Oriented Programming Language',
        id: 1
      },
      {
        label: `Imperative Language`,
        id: 2
      },
      {
        label: `Declarative Language`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_7',
    answer: 2
  },
  {
    id: 8,
    question: (
      <>Declarative language describes {EMPTY_LINE} of desired output.</>
    ),
    options: [
      {
        label: 'WHAT',
        id: 1
      },
      {
        label: `HOW`,
        id: 2
      },
      {
        label: `WHY`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_8',
    answer: 1
  },
  {
    id: 9,
    question: (
      <>
        {EMPTY_LINE} programming language is a style that treats object as
        prototype for creation of another object.
      </>
    ),
    options: [
      {
        label: 'Prototype-based',
        id: 1
      },
      {
        label: `Multi-paradigm`,
        id: 2
      },
      {
        label: `Dynamic Language`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'intro_9',
    answer: 1
  }
];
