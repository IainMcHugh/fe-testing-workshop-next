import { Form } from 'react-final-form';

import { MyForm } from '../Form/Form';
import { useSubmission } from '../hooks/useSubmission';

function FormPage() {
  const { handleSubmit } = useSubmission();

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        subscription={{ submitting: true, pristine: true }}
      >
        {() => <MyForm isDraft={true} />}
      </Form>
    </div>
  );
}

export { FormPage };
