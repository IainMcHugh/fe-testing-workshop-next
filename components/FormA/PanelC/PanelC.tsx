import { useEffect } from 'react';
import { Field } from 'react-final-form';

import { Panel } from '../../Panel/Panel';
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
    <Panel>
      <Field name="currency">
        {({ input }) => (
          <TextField
            label="Currency"
            {...input}
            id={input.name}
            placeholder="EUR"
          />
        )}
      </Field>
      <Field name="price">
        {({ input }) => (
          <TextField
            label="Price"
            {...input}
            id={input.name}
            placeholder="10"
          />
        )}
      </Field>
    </Panel>
  );
}

export { PanelC };
