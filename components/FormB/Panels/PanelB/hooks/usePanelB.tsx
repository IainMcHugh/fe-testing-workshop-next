import { useCallback } from 'react';
import { useForm } from 'react-final-form';

import { IFormValues, FORM_VALUES } from '../../../config';

const usePanelB = (firstName?: string) => {
  const { batch, change } = useForm<IFormValues>();

  const handleBlurFirstName = useCallback(() => {
    if (firstName !== '') {
      batch(() => {
        change(FORM_VALUES.phoneNumber, '');
        change(FORM_VALUES.email, '');
        change(FORM_VALUES.currency, '');
        change(FORM_VALUES.price, '');
      });
    }
  }, [firstName]);

  return { handleBlurFirstName };
};

export { usePanelB };
