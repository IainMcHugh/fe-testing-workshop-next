import { Field } from 'react-final-form';
import { Panel } from '../../../Toolkit/Panel/Panel';

import { handleErrors, required } from '../../../../helpers/form';
import { TField, FORM_VALUES } from '../../config';
import { fields } from '../../constants';
import { TextField } from '../../../Toolkit/TextField/TextField';

function PanelA() {
  return (
    <Panel>
      <Field<TField.FirstName> name={FORM_VALUES.firstName} validate={required}>
        {({ input, meta }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.firstName]}
            error={handleErrors<TField.FirstName>(meta)}
          />
        )}
      </Field>
      <Field<TField.LastName> name={FORM_VALUES.lastName} validate={required}>
        {({ input, meta }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.lastName]}
            error={handleErrors<TField.LastName>(meta)}
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelA };
