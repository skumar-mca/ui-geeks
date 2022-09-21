import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const IncludeScriptQuestions = [
  {
    id: 1,
    question: (
      <>{EMPTY_LINE} tag is used for adding JavaScript code to webpage.</>
    ),
    options: [
      {
        label: '<language>',
        id: 1
      },
      {
        label: '<script>',
        id: 2
      },
      {
        label: '<link>',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'is_1',
    answer: 2
  },
  {
    id: 2,
    question: <>External scripts can be linked via {EMPTY_LINE} attribute.</>,
    options: [
      {
        label: 'src',
        id: 1
      },
      {
        label: 'href',
        id: 2
      },
      {
        label: 'source',
        id: 3
      },
      {
        label: 'link',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'is_2',
    answer: 1
  },
  {
    id: 3,
    question: (
      <>{EMPTY_LINE} event is triggered when HTML elements are loaded.</>
    ),
    options: [
      {
        label: 'contentLoaded',
        id: 1
      },
      {
        label: 'DOMLoaded',
        id: 2
      },
      {
        label: 'DOMContentLoaded',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'is_3',
    answer: 3
  },
  {
    id: 4,
    question: (
      <>
        It is best to use {EMPTY_LINE} when scripts in page runs independently.
      </>
    ),
    options: [
      {
        label: 'async',
        id: 1
      },
      {
        label: `defer`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'is_4',
    answer: 1
  },
  {
    id: 5,
    question: (
      <>Use {EMPTY_LINE}, if scripts depend either on DOM or to each other.</>
    ),
    options: [
      {
        label: 'async',
        id: 1
      },
      {
        label: `defer`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'is_5',
    answer: 2
  }
];
