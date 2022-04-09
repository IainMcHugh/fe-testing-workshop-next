import { useEffect, useCallback } from 'react';
import { useForm } from 'react-final-form';

import { FORM_VALUES, IFormValues } from '../../../config';

const usePanelC = (firstName?: string, lastName?: string) => {
  const { batch, change, getFieldState } = useForm<IFormValues>();

  const handleBlurPanelB = useCallback(() => {
    batch(() => {
      change(FORM_VALUES.currency, '');
      change(FORM_VALUES.price, '');
    });
  }, []);

  const handleBlurFirstName = useCallback(() => {
    if (firstName !== '') {
      batch(() => {
        change(FORM_VALUES.phoneNumber, '');
        change(FORM_VALUES.email, '');
        change(FORM_VALUES.currency, '');
        change(FORM_VALUES.price, '');
      });
    }
  }, []);

  useEffect(() => {
    const currency = getFieldState(FORM_VALUES.currency)?.value;
    if (lastName === 'messy' && currency === 'EUR') {
      change(FORM_VALUES.currency, 'USD');
    }
  }, [lastName]);

  return { handleBlurPanelB, handleBlurFirstName };
};

export { usePanelC };
