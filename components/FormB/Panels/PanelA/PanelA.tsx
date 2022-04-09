import { Field } from 'react-final-form';
import { Panel } from '../../../Toolkit/Panel/Panel';

import { TField, FORM_VALUES } from '../../config';
import { fields } from '../../constants';
import { TextField } from '../../../Toolkit/TextField/TextField';

function PanelA() {
  return (
    <Panel>
      <Field<TField.FirstName> name={FORM_VALUES.firstName}>
        {({ input }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.firstName]}
          />
        )}
      </Field>
      <Field<TField.LastName> name={FORM_VALUES.lastName}>
        {({ input }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.lastName]}
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelA };
