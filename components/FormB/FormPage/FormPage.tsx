import { useCallback } from 'react';
import { Form } from 'react-final-form';
import { MyForm } from '../Form/Form';

function FormPage() {
  const handleSubmit = useCallback((values: any) => {
    alert(JSON.stringify(values));
  }, []);

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
