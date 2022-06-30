import React from "react";
import { Form, ValidateCallback } from "../components/form";

type LocationFormValues = {
  city: string;
  region: string;
};

export const LocationForm = () => {
  const sendLocation = (values: LocationFormValues) => {
    console.log(values);
  };

  const validateLocation: ValidateCallback<LocationFormValues> = (values: LocationFormValues) => {
    const errors: ReturnType<ValidateCallback<LocationFormValues>> = {};

    if (!values.city.length) {
      errors.city = "City is required";
    }

    return errors;
  };

  return (
    <Form<LocationFormValues> initialValues={{
      city: "",
      region: ""
    }} onSubmit={sendLocation} validate={validateLocation}>
      {({ values, errors, change, submit }) => (
        <form onSubmit={submit}>
          <div>
            <label htmlFor="city">City</label>
            <input id="city" name="city" type="text" value={values.city} onChange={({ target: { name, value }}) => {
              change(name, value);
            }} />
            {errors.city && <p role="alert">{errors.city}</p>}
          </div>
          <div>
            <label htmlFor="city">Region</label>
            <input id="region" name="region" type="text" list="region-list" value={values.region} onChange={({ target: { name, value }}) => {
              change(name, value);
            }} />
            <datalist id="region-list">
              <option>North</option>
              <option>Middle East</option>
              <option>West</option>
              <option>South</option>
            </datalist>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
}