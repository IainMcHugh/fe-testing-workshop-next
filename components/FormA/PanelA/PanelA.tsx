import { useEffect } from 'react';
import { Field } from 'react-final-form';

import { TextField } from '../../TextField/TextField';

type TValues = Record<string, string>;

interface IPanelA {
  form: any;
  values: TValues;
  onBlurFirstName?: (f: any, t: TValues) => void;
}

function PanelA({ form, values, onBlurFirstName }: IPanelA) {
  useEffect(() => {
    if (values?.lastName === 'messy' && values?.currency === 'EUR') {
      form.change('currency', 'USD');
    }
  }, [values]);

  return (
    <div>
      <Field name="firstName">
        {({ input }) => (
          <TextField
            {...input}
            label="First Name"
            onBlur={() => {
              input.onBlur();
              onBlurFirstName && onBlurFirstName(form, values);
            }}
            placeholder="first name"
            required
          />
        )}
      </Field>
      <Field name="lastName">
        {({ input }) => (
          <TextField
            label="Last Name"
            {...input}
            placeholder="last name"
            required
          />
        )}
      </Field>
    </div>
  );
}

export { PanelA };
