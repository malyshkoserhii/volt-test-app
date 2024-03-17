import * as React from 'react';

import { container, paragraph } from './empty.styles';

type EmptyProps = {
  status: string;
};

export const Empty: React.FunctionComponent<EmptyProps> = ({ status }) => {
  const text = React.useMemo(() => {
    return status === 'all'
      ? 'There are any tasks'
      : `There are any  ${status} tasks`;
  }, [status]);

  return (
    <div className={container}>
      <p className={paragraph}>{text}</p>
    </div>
  );
};
