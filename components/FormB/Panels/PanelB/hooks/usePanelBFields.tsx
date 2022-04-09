import { useField, useForm } from 'react-final-form';

import { IFormValues, TField, FORM_VALUES } from '../../../config';

const usePanelBFields = () => {
  const { getFieldState } = useForm<IFormValues>();
  useField<TField.FirstName>(FORM_VALUES.firstName, {
    subscription: { active: true },
  });

  const firstName = getFieldState(FORM_VALUES.firstName)?.value;

  return { firstName };
};

export { usePanelBFields };
