import { useField } from 'react-final-form';

const usePanelCFields = () => {
  const firstName = useField('firstName', { subscription: { active: true } })
    .input.value;
  const lastName = useField('lastName').input.value;
  return { firstName, lastName };
};

export { usePanelCFields };
