import { useForm } from 'react-final-form';

function Submit() {
  const { submit } = useForm();
  return <button onClick={submit}>Submit</button>;
}

export { Submit };
