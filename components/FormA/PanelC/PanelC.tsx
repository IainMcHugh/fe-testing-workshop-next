import { useEffect } from 'react';
import { Field } from 'react-final-form';

import { handleErrors, required } from '../../../helpers/form';
import { Panel } from '../../Toolkit/Panel/Panel';
import { TextField } from '../../Toolkit/TextField/TextField';

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
    <Panel>
      <Field name="currency" validate={required}>
        {({ input, meta }) => (
          <TextField
            label="Currency"
            {...input}
            id={input.name}
            placeholder="EUR"
            error={handleErrors(meta)}
          />
        )}
      </Field>
      <Field name="price" validate={required}>
        {({ input, meta }) => (
          <TextField
            label="Price"
            {...input}
            id={input.name}
            placeholder="10"
            error={handleErrors(meta)}
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelC };
