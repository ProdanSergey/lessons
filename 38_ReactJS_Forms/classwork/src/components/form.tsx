import React, { FormEventHandler, useState } from "react";

type Errors<Form> = Partial<Record<keyof Form, string>>;

type RenderProps<Form> = {
  values: Form,
  errors: Errors<Form>,
  change: (name: string, value: unknown) => void,
  submit: FormEventHandler<HTMLFormElement>,
}

export type SubmitCallback<Form> = (values: Form) => void;
export type ValidateCallback<Form> = (values: Form) => Errors<Form>;

type FormProps<Form> = {
  initialValues: Form,
  children: (props: RenderProps<Form>) => JSX.Element,
  onSubmit?: SubmitCallback<Form>,
  validate?: ValidateCallback<Form>
};

const hasError = <Form extends Record<string, unknown>>(errors: Errors<Form>): boolean => {
  return Object.keys(errors).length > 0;
}

export const Form = <Form extends Record<string, unknown>>({ initialValues, children, onSubmit, validate }: FormProps<Form>): JSX.Element => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors<Form>>({});

  const change = (name: string, value: unknown) => {
    if (hasError(errors)) {
      setErrors({});
    }

    setValues(prevValues => ({ ...prevValues, [name]: value }));
  }

  const submit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const errors = validate?.(values) ?? {};

    if (hasError(errors)) {
      setErrors(errors);
      return;
    }

    onSubmit?.(values);
  };

  return (
    <>
      {children({ values, errors, change, submit })}
    </>
  );
};