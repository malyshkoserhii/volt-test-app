import * as React from 'react';

import { labelStyles, textarea } from './textarea.styles';

type TextareaProps = {
  name: string;
  label?: string;
  error?: string;
  touched?: boolean;
  input?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

export const Textarea: React.FunctionComponent<TextareaProps> = ({
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
      {label && (
        <label htmlFor={name} className={labelStyles}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={textarea}
        rows={5}
        {...input}
      ></textarea>
      {isError && <p>error</p>}
    </section>
  );
};
