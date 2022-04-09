import { Panel } from '../../Toolkit/Panel/Panel';
import { Button } from '../../../styles';

interface ISubmit {
  onClick: () => void;
}

function Submit({ onClick }: ISubmit) {
  return (
    <Panel>
      <Button type="submit" onClick={onClick}>
        Submit
      </Button>
    </Panel>
  );
}

export { Submit };
