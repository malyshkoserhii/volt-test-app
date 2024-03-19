import * as React from 'react'
import classNames from 'classnames'

import { dummy, errorStyles, inputStyles, labelStyles } from './input.styles'

type InputProps = {
  name: string
  label?: string
  error?: string
  touched?: boolean
  type?: React.HTMLInputTypeAttribute
  input?: React.InputHTMLAttributes<HTMLInputElement>
  extraInputStyles?: string
  extraLabelStyles?: string
  extraInputSectionStyles?: string
}

export const Input: React.FunctionComponent<InputProps> = ({
  name,
  label,
  touched,
  error,
  type = 'text',
  input,
  extraInputSectionStyles,
  extraLabelStyles,
  extraInputStyles,
}) => {
  const isError = React.useMemo(() => {
    return Boolean(error) && Boolean(touched)
  }, [error, touched])

  return (
    <section className={classNames(extraInputSectionStyles)}>
      {label && 
        <label
          htmlFor={name}
          className={classNames(labelStyles, extraLabelStyles)}
        >
          {label}
        </label>
      }
      <input
        id={name}
        name={name}
        type={type}
        className={classNames(inputStyles, extraInputStyles)}
        {...input}
      />
      {isError ? 
        <p className={errorStyles}>{error}</p>
        : 
        <span className={dummy} />
      }
    </section>
  )
}
