import { Panel } from '../../Panel/Panel';
import { Button } from '../../../styles';

interface ISubmit {
  onClick: () => void;
}

function Submit({ onClick }: ISubmit) {
  return (
    <Panel>
      <Button onClick={onClick}>Submit</Button>
    </Panel>
  );
}

export { Submit };
