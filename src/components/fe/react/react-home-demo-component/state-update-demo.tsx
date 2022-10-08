import React, { useState } from 'react';
import { NewLine } from '../../../shared/util/util';
import YalsButton from '../../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';
import YalsFlex from '../../../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../../../shared/yals-flex/yals-flex.types';
import YALSInput from '../../../shared/yals-input/yals-input';

const ReactHomeDemoStateUpdate = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(() => counter + 1);
  };

  const decrement = () => {
    setCounter(() => counter - 1);
  };

  const [inputValue, setInputValue] = useState('React');
  const onHandleChange = (evt: any) => {
    const { value } = evt.target;
    setInputValue(() => value);
  };

  return (
    <>
      <YalsFlex justifyContent={FlexJustifyContentTypes.SpaceBetween}>
        <div>
          <NewLine />
          <div className='result-item'>
            <span className='key-label'>Counter Value:</span>
            <span className='key-value'>{counter}</span>
          </div>
        </div>

        <div>
          <NewLine />

          <YalsButton variant={YALSButtonVariantTypes.Dark} onClick={increment}>
            Increment
          </YalsButton>
          <YalsButton
            variant={YALSButtonVariantTypes.Secondary}
            onClick={decrement}
            className='ms-2'
          >
            Decrement
          </YalsButton>
        </div>
      </YalsFlex>

      <NewLine />
      <NewLine />
      <div>
        <h6>Controlled Component State Update</h6>
        <div>
          <YALSInput
            id='inputValue'
            placeHolder='Enter value...'
            value={inputValue}
            onChange={onHandleChange}
          />
        </div>
        <NewLine />
        <div>
          <div className='result-item'>
            <span className='key-label'>Input Value:</span>
            <span className='key-value'>{inputValue}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactHomeDemoStateUpdate;

export const ReactHomeDemoStateUpdateCode = `const ReactStateUpdateDemo = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(() => counter + 1);
  };

  const decrement = () => {
    setCounter(() => counter - 1);
  };

  const [inputValue, setInputValue] = useState('React');
  const onHandleChange = (evt) => {
    const { value } = evt.target;
    setInputValue(() => value);
  };

  return (
    <>
      <span><i>Counter Value<i>: </span>
      <span><b>{counter}</b></span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h6>Controlled Component State Update</h6>
      <input placeHolder='Enter value...'
        value={inputValue} onChange={onHandleChange}
      />
      <span><i>Input Value: <i></span>
      <span><b>{inputValue}</b></span>
    </>
  );
};
`;
