import React, { FunctionComponent } from "react";
import { Form } from "../components/form";

export type UserFormValues = {
  name: string
};

const initialValues: UserFormValues = {
  name: ""
};

export const UserForm: FunctionComponent = () => (
  <Form<UserFormValues> initialValues={initialValues}>
    {({ values, errors, change, submit }) => (
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={values.name} onChange={({ target: { name, value }}) => {
            change(name, value);
          }} />
          {errors.name && <p role="alert">{errors.name}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )}
  </Form>
);