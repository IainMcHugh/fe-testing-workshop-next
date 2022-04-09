import { Field } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';
import { usePanelC } from './hooks/usePanelC';
import { usePanelCFields } from './hooks/usePanelCFields';

import { TextField } from '../../../Toolkit/TextField/TextField';
import { Panel } from '../../../Toolkit/Panel/Panel';

function PanelC() {
  const { firstName, lastName } = usePanelCFields();
  const { handleBlurFirstName, handleBlurPanelB } = usePanelC(
    firstName,
    lastName,
  );
  return (
    <Panel>
      <Field name="currency">
        {({ input }) => (
          <TextField
            label="Currency"
            {...input}
            id={input.name}
            placeholder="EUR"
          />
        )}
      </Field>
      <Field name="price">
        {({ input }) => (
          <TextField
            label="Price"
            {...input}
            id={input.name}
            placeholder="10"
          />
        )}
      </Field>
      <OnBlur name="firstName">{handleBlurFirstName}</OnBlur>
      <OnBlur name="phoneNumber">{handleBlurPanelB}</OnBlur>
      <OnBlur name="email">{handleBlurPanelB}</OnBlur>
    </Panel>
  );
}

export { PanelC };
