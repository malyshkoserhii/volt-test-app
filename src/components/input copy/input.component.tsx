import * as React from 'react';

import { inputStyles } from './input.styles';

type InputProps = {
  name: string;
  label: string;
  error?: string;
  touched?: boolean;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const Input: React.FunctionComponent<InputProps> = ({
  name,
  label,
  touched,
  error,
  input,
}) => {
  const isError = React.useMemo(() => {
    return Boolean(error) && Boolean(touched);
  }, [error, touched]);

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} className={inputStyles} {...input} />
      {isError && <p>error</p>}
    </section>
  );
};
