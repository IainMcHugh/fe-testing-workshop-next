import { Field } from 'react-final-form';

import { handleErrors, required } from '../../../helpers/form';
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
      <Field name="phoneNumber" validate={required}>
        {({ input, meta }) => (
          <TextField
            label="Phone Number"
            id={input.name}
            {...input}
            placeholder="0871234567"
            onBlur={() => {
              input.onBlur();
              handleBlur && handleBlur(form, values);
            }}
            error={handleErrors(meta)}
          />
        )}
      </Field>
      <Field name="email" validate={required}>
        {({ input, meta }) => (
          <TextField
            label="Email"
            id={input.name}
            {...input}
            placeholder="john.doe@gmail.com"
            onBlur={() => {
              input.onBlur();
              handleBlur && handleBlur(form, values);
            }}
            error={handleErrors(meta)}
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelB };
