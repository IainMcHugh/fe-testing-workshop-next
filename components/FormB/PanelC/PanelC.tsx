import { Field } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';
import { usePanelC } from './hooks/usePanelC';
import { usePanelCFields } from './hooks/usePanelCFields';

import { TextField } from '../../TextField/TextField';

function PanelC() {
  const { firstName, lastName } = usePanelCFields();
  const { handleBlurFirstName, handleBlurPanelB } = usePanelC(
    firstName,
    lastName,
  );
  return (
    <div>
      <Field name="currency">
        {({ input }) => (
          <TextField label="Currency" {...input} placeholder="currency" />
        )}
      </Field>
      <Field name="price">
        {({ input }) => (
          <TextField label="Price" {...input} placeholder="price" />
        )}
      </Field>
      <OnBlur name="firstName">{handleBlurFirstName}</OnBlur>
      <OnBlur name="phoneNumber">{handleBlurPanelB}</OnBlur>
      <OnBlur name="email">{handleBlurPanelB}</OnBlur>
    </div>
  );
}

export { PanelC };
