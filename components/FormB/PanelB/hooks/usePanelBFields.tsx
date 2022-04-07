import { useField } from 'react-final-form';

const usePanelBFields = () => {
  const firstName = useField('firstName', { subscription: { active: true } })
    .input.value;
  return { firstName };
};

export { usePanelBFields };
