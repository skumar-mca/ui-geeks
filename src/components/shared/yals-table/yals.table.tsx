import classNames from 'classnames';
import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import { AppPrefix } from '../../../util/app-constants';
import { YALSButtonSizeTypes } from '../yals-button/yals-button.types';
import './yals-table.scss';
import { IYAPSTableProps, YALSTDType, YALSTHType } from './yals.table.types';

const YALSTable = (props: IYAPSTableProps) => {
  const {
    thList,
    tdList,
    striped = true,
    bordered = true,
    hover = true,
    size = YALSButtonSizeTypes.Small
  } = props;

  const tableClasses = classNames({
    [`${AppPrefix}-table`]: true
  });

  return (
    <div className={tableClasses}>
      <Table striped={striped} bordered={bordered} hover={hover} size={size}>
        <thead>
          <tr>
            {thList.map((th: YALSTHType) => {
              return <th>{th.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tdList.map((td: YALSTDType) => {
            return (
              <tr>
                {thList.map((th: any) => {
                  return <td>{td[th.column]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default YALSTable;
