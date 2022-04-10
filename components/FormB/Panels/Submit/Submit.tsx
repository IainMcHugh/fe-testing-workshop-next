import { useForm, useFormState } from 'react-final-form';

import { Button } from '../../../../styles';
import { Panel } from '../../../Toolkit/Panel/Panel';
import { IFormValues } from '../../config';

function Submit() {
  const { submit } = useForm<IFormValues>();
  const { submitting } = useFormState<IFormValues>();

  const text = submitting ? (
    <>
      <p>Loading...</p>
      <div
        className="spinner-border spinner-border-sm text-light"
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </>
  ) : (
    'Submit'
  );
  return (
    <Panel>
      <Button onClick={submit} disabled={submitting}>
        {text}
      </Button>
    </Panel>
  );
}

export { Submit };
