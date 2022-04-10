import { Field } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';
import { usePanelC } from './hooks/usePanelC';
import { usePanelCFields } from './hooks/usePanelCFields';

import { handleErrors, required } from '../../../../helpers/form';
import { TField, FORM_VALUES } from '../../config';
import { fields } from '../../constants';
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
      <Field<TField.Currency> name={FORM_VALUES.currency} validate={required}>
        {({ input, meta }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.currency]}
            error={handleErrors<TField.Currency>(meta)}
          />
        )}
      </Field>
      <Field<TField.Price> name={FORM_VALUES.price} validate={required}>
        {({ input, meta }) => (
          <TextField
            {...input}
            id={input.name}
            {...fields[FORM_VALUES.price]}
            error={handleErrors<TField.Price>(meta)}
          />
        )}
      </Field>
      <OnBlur name={FORM_VALUES.firstName}>{handleBlurFirstName}</OnBlur>
      <OnBlur name={FORM_VALUES.phoneNumber}>{handleBlurPanelB}</OnBlur>
      <OnBlur name={FORM_VALUES.email}>{handleBlurPanelB}</OnBlur>
    </Panel>
  );
}

export { PanelC };
