import { useEffect, useCallback } from 'react';
import { useForm } from 'react-final-form';

const usePanelC = (firstName: string, lastName: string) => {
  const { batch, change, getFieldState } = useForm();

  const handleBlurPanelB = useCallback(() => {
    batch(() => {
      change('currency', '');
      change('price', '');
    });
  }, []);

  const handleBlurFirstName = useCallback(() => {
    if (firstName !== '') {
      batch(() => {
        change('phoneNumber', '');
        change('email', '');
        change('currency', '');
        change('price', '');
      });
    }
  }, []);

  useEffect(() => {
    const currency = getFieldState('currency')?.value;
    if (lastName === 'messy' && currency === 'EUR') {
      change('currency', 'USD');
    }
  }, [lastName]);

  return { handleBlurPanelB, handleBlurFirstName };
};

export { usePanelC };
