import { Field } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';

import { usePanelB } from './hooks/usePanelB';
import { usePanelBFields } from './hooks/usePanelBFields';
import { TextField } from '../../TextField/TextField';

function PanelB() {
  const { firstName } = usePanelBFields();
  const { handleBlurFirstName } = usePanelB(firstName);
  return (
    <div>
      <Field name="phoneNumber">
        {({ input }) => (
          <TextField
            label="Phone Number"
            {...input}
            placeholder="phone number"
          />
        )}
      </Field>
      <Field name="email">
        {({ input }) => (
          <TextField label="Email" {...input} placeholder="email" />
        )}
      </Field>
      <OnBlur name="firstName">{handleBlurFirstName}</OnBlur>
    </div>
  );
}

export { PanelB };
