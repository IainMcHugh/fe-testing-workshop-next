import { Field } from 'react-final-form';

import { Panel } from '../../Toolkit/Panel/Panel';
import { TextField } from '../../Toolkit/TextField/TextField';

type TValues = Record<string, string>;

interface IPanelB {
  form: any;
  values: TValues;
  handleBlur?: (f: any, t: TValues) => void;
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
