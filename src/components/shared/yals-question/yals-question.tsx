import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import YALSCheckRadio from '../yals-check-radio/yals-check-radio';
import { YALSCheckRadioTypes } from '../yals-check-radio/yals-check-radio.types';
import './yals-question.scss';
import { IYALSQuestionProps } from './yals-question.types';

const YALSQuestion = (props: IYALSQuestionProps) => {
  const { question, questionId, options, type, name, preSelected, onChange } =
    props;

  const questionClasses = classNames({
    [`${AppPrefix}-question`]: true
  });

  const [selected, setSelected] = useState<Array<string | number>>([]);

  const onQuestionSelection = (opt: any, evt: any) => {
    const { id, checked } = evt.target;
    opt.isChecked = checked;
    if (type === YALSCheckRadioTypes.Checkbox) {
      const [optionId, quesId] = id.split('_');

      let currentSelected = [...selected];

      if (!checked) {
        const itemIndex = currentSelected.indexOf(optionId);
        if (itemIndex > -1) {
          currentSelected.splice(itemIndex, 1);
        }
      } else {
        currentSelected.push(optionId);
      }

      setSelected(() => currentSelected);
      onChange(quesId, currentSelected);
    }

    if (type === YALSCheckRadioTypes.Radio) {
      const [optionId, quesId] = id.split('_');
      setSelected(() => optionId);
      onChange(quesId, optionId);
    }
  };

  const isChecked = (opt: any): boolean | undefined => {
    return opt.isChecked;
  };

  useEffect(() => {
    // set selected answer on load, primarily on next/prev navigation
    if (preSelected) {
      const preSelectedAnswer = preSelected[questionId];
      if (preSelectedAnswer) {
        setSelected(() => preSelectedAnswer);
      }
    }
  }, []);

  return (
    <div className={questionClasses} key={`ques_${questionId}`}>
      <div className='question'>{question}</div>
      <div className='options'>
        {options.map((opt: any) => {
          return (
            <YALSCheckRadio
              key={`${opt.id}_${questionId}`}
              label={opt.label}
              id={`${opt.id}_${questionId}`}
              type={type}
              name={name}
              defaultChecked={isChecked(opt)}
              onChange={onQuestionSelection.bind(this, opt)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(YALSQuestion);
