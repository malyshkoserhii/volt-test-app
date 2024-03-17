import * as React from 'react';
import { container, header, number, title } from './counter.styles';

type CounterProps = {
  compeled: number;
  current: number;
};

export const Counter: React.FunctionComponent<CounterProps> = ({
  compeled,
  current,
}) => {
  return (
    <div className={container}>
      <h2 className={header}>
        <span className={title}>Completed: </span>
        <span className={number}>{compeled}</span>
      </h2>
      <h2 className={header}>
        <span className={title}>Current: </span>
        <span className={number}>{current}</span>
      </h2>
    </div>
  );
};
