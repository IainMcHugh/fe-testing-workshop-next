import { useForm } from 'react-final-form';

import { Button } from '../../../../styles';
import { Panel } from '../../../Toolkit/Panel/Panel';
import { IFormValues } from '../../config';

function Submit() {
  const { submit } = useForm<IFormValues>();
  return (
    <Panel>
      <Button onClick={submit}>Submit</Button>
    </Panel>
  );
}

export { Submit };
