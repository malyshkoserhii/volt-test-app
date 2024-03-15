import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@blueprintjs/core';
import { Field, Form } from 'react-final-form';
// import { AppDispatch } from '../../redux/store';
// import * as actions from '../../redux/modal/modal-actions';

import {
  btnWrapper,
  checkbox,
  checkboxLabel,
  checkboxSection,
  form,
  inputWrapper,
  wrapper,
} from './todo-form.styles';
// import * as actions from '../../redux/modal/modal-actions';
import { Modal } from '../modal';
import { Input } from '../input';
import { Textarea } from '../textarea';
import {
  composeValidators,
  maxTitleLenght,
  required,
} from '../../validation/todo.validation';

type TodoFormProps = {
  isFormOpen: boolean;
  onCloseForm: () => void;
};

export const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  isFormOpen,
  onCloseForm,
}) => {
  const onSubmit = () => {
    // console.log(values);
  };

  return (
    <Modal
      isOpen={isFormOpen}
      onClose={onCloseForm}
      actionButton={<Button text="Save" />}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <div className={wrapper}>
            <form onSubmit={handleSubmit} className={form}>
              <div className={inputWrapper}>
                <Field
                  name="title"
                  validate={composeValidators(required, maxTitleLenght(45))}
                >
                  {({ input, meta }) => {
                    console.log('meta: ', meta.error);
                    return (
                      <Input
                        label="Title"
                        name="title"
                        error={meta?.error}
                        touched={meta?.touched}
                        input={input}
                      />
                    );
                  }}
                </Field>
                <Field name="description">
                  {({ input, meta }) => {
                    return (
                      <Textarea
                        label="Description"
                        name="description"
                        error={meta?.error}
                        touched={meta?.touched}
                        input={input}
                      />
                    );
                  }}
                </Field>
                <Field name="completed" type="checkbox">
                  {({ input, meta }) => {
                    return (
                      <Input
                        type="checkbox"
                        name="completed"
                        label="Completed"
                        error={meta?.error}
                        touched={meta?.touched}
                        input={input}
                        extraInputSectionStyles={checkboxSection}
                        extraLabelStyles={checkboxLabel}
                        extraInputStyles={checkbox}
                      />
                    );
                  }}
                </Field>
              </div>

              <div className={btnWrapper}>
                <Button
                  intent="primary"
                  type="button"
                  text="Save"
                  onClick={() => {}}
                />
                <Button
                  intent="none"
                  type="button"
                  text="Cancel"
                  onClick={onCloseForm}
                />
              </div>
            </form>
          </div>
        )}
      </Form>
    </Modal>
  );
};
