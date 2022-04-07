import { useEffect } from 'react';
import { Field } from 'react-final-form';

import { TextField } from '../../TextField/TextField';

interface IPanelC {
  form: any;
  isDraftThenSetPrice: boolean;
}

function PanelC({ form, isDraftThenSetPrice }: IPanelC) {
  useEffect(() => {
    if (isDraftThenSetPrice) {
      form.change('price', '100');
    }
  }, [isDraftThenSetPrice]);

  return (
    <div>
      <Field name="currency">
        {({ input }) => (
          <TextField label="Currency" {...input} placeholder="currency" />
        )}
      </Field>
      <Field name="price">
        {({ input }) => (
          <TextField label="Price" {...input} placeholder="price" />
        )}
      </Field>
    </div>
  );
}

export { PanelC };
