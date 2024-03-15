import type { FieldValidator } from 'final-form';

export const composeValidators = (
  ...validators: Array<FieldValidator<string>>
) => {
  return (value: string, allValues: object): string => {
    return validators.reduce((error, validator) => {
      return error ? error : validator(value, allValues);
    }, '');
  };
};

export const required = (value: string): string | undefined => {
  return value ? undefined : 'Required';
};

export const maxTitleLenght = (min: number) => {
  return (value: string): string | undefined => {
    return value.length >= min
      ? undefined
      : 'It should contain maximum 45 symbols';
  };
};
