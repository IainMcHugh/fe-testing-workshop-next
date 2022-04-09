import { useField, useForm } from 'react-final-form';

const usePanelBFields = () => {
  const { getFieldState } = useForm();
  useField('firstName', {
    subscription: { active: true },
  });

  const firstName = getFieldState('firstName')?.value;

  return { firstName };
};

export { usePanelBFields };
