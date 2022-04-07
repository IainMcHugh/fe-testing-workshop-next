import { Field } from 'react-final-form';

import { TextField } from '../../TextField/TextField';

type TValues = Record<string, string>;

interface IPanelB {
  form: any;
  values: TValues;
  handleBlur?: (f: any, t: TValues) => void;
}

function PanelB({ form, values, handleBlur }: IPanelB) {
  return (
    <div>
      <Field name="phoneNumber">
        {({ input }) => (
          <TextField
            label="Phone Number"
            {...input}
            placeholder="phone number"
            onBlur={() => {
              input.onBlur();
              handleBlur && handleBlur(form, values);
            }}
          />
        )}
      </Field>
      <Field name="email">
        {({ input }) => (
          <TextField
            label="Email"
            {...input}
            placeholder="email address"
            onBlur={() => {
              input.onBlur();
              handleBlur && handleBlur(form, values);
            }}
          />
        )}
      </Field>
    </div>
  );
}

export { PanelB };
