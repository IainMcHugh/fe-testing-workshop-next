import { Field } from 'react-final-form';

import { TextField } from '../../TextField/TextField';

function PanelA() {
  return (
    <div>
      <Field name="firstName">
        {({ input }) => (
          <TextField label="First Name" {...input} placeholder="first name" />
        )}
      </Field>
      <Field name="lastName">
        {({ input }) => (
          <TextField label="Last Name" {...input} placeholder="last name" />
        )}
      </Field>
    </div>
  );
}

export { PanelA };
