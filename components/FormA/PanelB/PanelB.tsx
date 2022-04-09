import { Field } from 'react-final-form';

import { IFormValues } from '../../FormB/config';
import { Panel } from '../../Toolkit/Panel/Panel';
import { TextField } from '../../Toolkit/TextField/TextField';

interface IPanelB {
  form: any;
  values: IFormValues;
  handleBlur?: (f: any, t: IFormValues) => void;
}

function PanelB({ form, values, handleBlur }: IPanelB) {
  return (
    <Panel>
      <Field name="phoneNumber">
        {({ input }) => (
          <TextField
            label="Phone Number"
            id={input.name}
            {...input}
            placeholder="0871234567"
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
            id={input.name}
            {...input}
            placeholder="john.doe@gmail.com"
            onBlur={() => {
              input.onBlur();
              handleBlur && handleBlur(form, values);
            }}
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelB };
