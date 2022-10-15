import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Space from '../../../shared/space/space';
import { B, I, NewLine } from '../../../shared/util/util';
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

  const [inputValue, setInputValue] = useState({
    language: 'React',
    version: 16
  });

  const onHandleChange = (evt: any) => {
    const { value, id } = evt.target;

    setInputValue((prev: any) => {
      return {
        ...prev,
        [id]: value
      };
    });
  };

  return (
    <>
      <YalsFlex justifyContent={FlexJustifyContentTypes.SpaceBetween}>
        <YalsButton
          variant={YALSButtonVariantTypes.Secondary}
          onClick={decrement}
        >
          Decrement
        </YalsButton>

        <div>
          <B>Counter:</B>
          <Space />
          <I>{counter}</I>
        </div>

        <YalsButton variant={YALSButtonVariantTypes.Dark} onClick={increment}>
          Increment
        </YalsButton>
      </YalsFlex>

      <NewLine />
      <NewLine />
      <div>
        <h6>Controlled Component State Update</h6>
        <Row>
          <Col xs={6} md={6} sm={6} className='pe-2'>
            <YALSInput
              id='language'
              placeHolder='Enter value...'
              value={inputValue.language}
              label='Enter Language'
              onChange={onHandleChange}
            />
          </Col>

          <Col xs={6} md={6} sm={6}>
            <YALSInput
              id='version'
              placeHolder='Enter version...'
              value={inputValue.version}
              label='Enter Version'
              type='number'
              onChange={onHandleChange}
            />
          </Col>
        </Row>

        <NewLine />

        <B>Form Values:</B>
        <NewLine />
        <span className='text-sm'>{JSON.stringify(inputValue, null, ' ')}</span>
        <NewLine />
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

  const [inputValue, setInputValue] = useState({
    language: 'React',
    version: 16
  });

  const onHandleChange = (evt: any) => {
    const { value, id } = evt.target;
    setInputValue((prev: any) => {
      return {
        ...prev,
        [id]: value
      };
    });
  };

  return (
    <>
      <button onClick={increment}>Increment</button>
      <span><i>Counter</i>: </span>
      <span><b>{counter}</b></span>
      <button onClick={decrement}>Decrement</button>

      <h6>Controlled Component State Update</h6>
      <label>Enter Language</label>
      <input  
        id='language'
        placeHolder='Enter value...'
        value={inputValue.language}
        onChange={onHandleChange}
      />

      <label>Enter Version</label>
      <input  
        id='version'
        placeHolder='Enter version...'
        value={inputValue.version}
        type='number'
        onChange={onHandleChange}
      />
      
      <i>Form Values: </i>
      <span>
        <b>
          {JSON.stringify(inputValue, null, ' ')}
        </b>
      </span>
    </>
  );
};
`;
