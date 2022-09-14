import React from 'react';
import { Table } from 'react-bootstrap';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { BI, NewLine } from '../../../../shared/util/util';

const JSBinaryRelationOperators = () => {
  return (
    <>
      <Para>
        <Heading as='h3'>Relational Operators</Heading>
        Used for comparing two values. It compares the two operands and returns
        a boolean value, based on whether comparison is <BI>true</BI> or{' '}
        <BI>false</BI>.
        <NewLine />
        <NewLine />
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th style={{ width: '100px' }}>Operator</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`<`}</td>
              <td>Less Than</td>
              <td>{`2 < 5`}</td>
            </tr>
            <tr>
              <td>{`>`}</td>
              <td>Greater Than</td>
              <td>{`5 > 2`}</td>
            </tr>
            <tr>
              <td>{`<=`}</td>
              <td>Less Than Equal To</td>
              <td>{`2 <= 2`}</td>
            </tr>
            <tr>
              <td>{`>=`}</td>
              <td>Greater Than Equal To</td>
              <td>{`2 >= 5`}</td>
            </tr>
          </tbody>
        </Table>
      </Para>
    </>
  );
};

export default JSBinaryRelationOperators;
