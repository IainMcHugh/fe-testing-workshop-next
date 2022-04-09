import { Field } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';

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
      <Field<TField.PhoneNumber> name={FORM_VALUES.phoneNumber}>
        {({ input }) => (
          <TextField
            id={input.name}
            {...input}
            {...fields[FORM_VALUES.phoneNumber]}
          />
        )}
      </Field>
      <Field<TField.Email> name={FORM_VALUES.email}>
        {({ input }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.email]}
          />
        )}
      </Field>
      <OnBlur name={FORM_VALUES.firstName}>{handleBlurFirstName}</OnBlur>
    </Panel>
  );
}

export { PanelB };
