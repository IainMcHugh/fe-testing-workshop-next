import { Field, useField, useForm } from 'react-final-form';
import { OnBlur } from 'react-final-form-listeners';

import { handleErrors, required } from '../../../../helpers/form';
import { TField, FORM_VALUES, IFormValues } from '../../config';
import { fields } from '../../constants';
import { TextField } from '../../../Toolkit/TextField/TextField';
import { Panel } from '../../../Toolkit/Panel/Panel';
import { usePanelC } from './hooks/usePanelC';

function PanelC() {
  const { batch, change, getFieldState } = useForm<IFormValues>();
  useField<TField.FirstName>(FORM_VALUES.firstName, {
    subscription: { active: true },
  });
  const lastName = useField<TField.LastName>(FORM_VALUES.lastName).input.value;
  const firstName = getFieldState(FORM_VALUES.firstName)?.value;

  const { handleBlurFirstName, handleBlurPanelB } = usePanelC({
    fieldSubscriptions: { firstName, lastName },
    formMethods: { batch, change, getFieldState },
  });

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
