import { Field } from 'react-final-form';
import { Panel } from '../../Panel/Panel';

import { TextField } from '../../TextField/TextField';

function PanelA() {
  return (
    <Panel>
      <Field name="firstName">
        {({ input }) => (
          <TextField
            label="First Name"
            {...input}
            id={input.name}
            placeholder="John"
          />
        )}
      </Field>
      <Field name="lastName">
        {({ input }) => (
          <TextField
            label="Last Name"
            {...input}
            id={input.name}
            placeholder="Doe"
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelA };
