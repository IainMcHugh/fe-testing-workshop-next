import { useForm } from 'react-final-form';
import { Button } from '../../../../styles';
import { Panel } from '../../../Toolkit/Panel/Panel';

function Submit() {
  const { submit } = useForm();
  return (
    <Panel>
      <Button onClick={submit}>Submit</Button>
    </Panel>
  );
}

export { Submit };
