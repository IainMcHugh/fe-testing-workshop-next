import { Field } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';

import { handleErrors, required } from '../../../../helpers/form';
import { TField, FORM_VALUES } from '../../config';
import { fields } from '../../constants';
import { usePanelB } from './hooks/usePanelB';
import { usePanelBFields } from './hooks/usePanelBFields';
import { TextField } from '../../../Toolkit/TextField/TextField';
import { Panel } from '../../../Toolkit/Panel/Panel';

function PanelB() {
  const { firstName } = usePanelBFields();
  const { handleBlurFirstName } = usePanelB(firstName);
  return (
    <Panel>
      <Field<TField.PhoneNumber>
        name={FORM_VALUES.phoneNumber}
        validate={required}
      >
        {({ input, meta }) => (
          <TextField
            id={input.name}
            {...input}
            {...fields[FORM_VALUES.phoneNumber]}
            error={handleErrors<TField.PhoneNumber>(meta)}
          />
        )}
      </Field>
      <Field<TField.Email> name={FORM_VALUES.email} validate={required}>
        {({ input, meta }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.email]}
            error={handleErrors<TField.Email>(meta)}
          />
        )}
      </Field>
      <OnBlur name={FORM_VALUES.firstName}>{handleBlurFirstName}</OnBlur>
    </Panel>
  );
}

export { PanelB };
