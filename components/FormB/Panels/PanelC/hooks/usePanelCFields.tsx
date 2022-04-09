import { useField, useForm } from 'react-final-form';

const usePanelCFields = () => {
  const { getFieldState } = useForm();
  useField('firstName', { subscription: { active: true } });
  const lastName = useField('lastName').input.value;

  const firstName = getFieldState('firstName')?.value;
  return { firstName, lastName };
};

export { usePanelCFields };
