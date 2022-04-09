import { useCallback } from 'react';
import { FORM_ERROR } from 'final-form';

import formApi from '../../../api/formApi';

const useSubmission = () => {
  const handleSubmit = useCallback(async (values: Record<string, string>) => {
    try {
      const { message } = await formApi.submitForm(values);
      alert(message);
    } catch (error: any) {
      console.log(error.message);
      return { [FORM_ERROR]: error.message };
    }
  }, []);

  return { handleSubmit };
};

export { useSubmission };
