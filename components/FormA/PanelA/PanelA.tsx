import { useEffect } from 'react';
import { Field } from 'react-final-form';
import { IFormValues } from '../../FormB/config';

import { Panel } from '../../Toolkit/Panel/Panel';
import { TextField } from '../../Toolkit/TextField/TextField';

interface IPanelA {
  form: any;
  values: IFormValues;
  onBlurFirstName?: (f: any, t: IFormValues) => void;
}

function PanelA({ form, values, onBlurFirstName }: IPanelA) {
  useEffect(() => {
    if (values?.lastName === 'messy' && values?.currency === 'EUR') {
      form.change('currency', 'USD');
    }
  }, [values]);

  return (
    <Panel>
      <Field name="firstName">
        {({ input }) => (
          <TextField
            {...input}
            id={input.name}
            label="First Name"
            onBlur={() => {
              input.onBlur();
              onBlurFirstName && onBlurFirstName(form, values);
            }}
            placeholder="John"
          />
        )}
      </Field>
      <Field name="lastName">
        {({ input }) => (
          <TextField
            id={input.name}
            label="Last Name"
            {...input}
            placeholder="Doe"
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelA };
