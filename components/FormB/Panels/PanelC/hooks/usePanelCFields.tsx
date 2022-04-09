import { useField, useForm } from 'react-final-form';

import { FORM_VALUES, IFormValues, TField } from '../../../config';

const usePanelCFields = () => {
  const { getFieldState } = useForm<IFormValues>();
  useField<TField.FirstName>(FORM_VALUES.firstName, {
    subscription: { active: true },
  });
  const lastName = useField<TField.LastName>(FORM_VALUES.lastName).input.value;

  const firstName = getFieldState(FORM_VALUES.firstName)?.value;
  return { firstName, lastName };
};

export { usePanelCFields };
