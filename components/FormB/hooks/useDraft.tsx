import { useEffect } from 'react';
import { useForm } from 'react-final-form';

const useDraft = (isDraft: boolean) => {
  const { change } = useForm();

  useEffect(() => {
    if (isDraft) {
      change('price', '100');
    }
  }, [isDraft]);
};

export { useDraft };
