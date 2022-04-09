import { Field } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';

import { usePanelB } from './hooks/usePanelB';
import { usePanelBFields } from './hooks/usePanelBFields';
import { TextField } from '../../../Toolkit/TextField/TextField';
import { Panel } from '../../../Toolkit/Panel/Panel';

function PanelB() {
  const { firstName } = usePanelBFields();
  const { handleBlurFirstName } = usePanelB(firstName);
  return (
    <Panel>
      <Field name="phoneNumber">
        {({ input }) => (
          <TextField
            label="Phone Number"
            id={input.name}
            {...input}
            placeholder="0871234567"
          />
        )}
      </Field>
      <Field name="email">
        {({ input }) => (
          <TextField
            label="Email"
            {...input}
            id={input.name}
            placeholder="john.doe@gmail.com"
          />
        )}
      </Field>
      <OnBlur name="firstName">{handleBlurFirstName}</OnBlur>
    </Panel>
  );
}

export { PanelB };
