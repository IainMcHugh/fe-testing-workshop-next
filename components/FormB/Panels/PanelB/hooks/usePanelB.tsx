import { useCallback } from 'react';
import { useForm } from 'react-final-form';

const usePanelB = (firstName: string) => {
  const { batch, change } = useForm();

  const handleBlurFirstName = useCallback(() => {
    if (firstName !== '') {
      batch(() => {
        change('phoneNumber', '');
        change('email', '');
        change('currency', '');
        change('price', '');
      });
    }
  }, [firstName]);

  return { handleBlurFirstName };
};

export { usePanelB };
