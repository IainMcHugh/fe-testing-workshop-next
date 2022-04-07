import { useState, useEffect } from 'react';
import { Form } from 'react-final-form';
import { preventDefault } from '../../../helpers/preventDefault';
import { PanelA } from '../PanelA/PanelA';
import { PanelB } from '../PanelB/PanelB';
import { PanelC } from '../PanelC/PanelC';
import { Submit } from '../Submit/Submit';

interface IMyForm {
  isDraft?: boolean;
}

function MyForm({ isDraft }: IMyForm) {
  const [isDraftThenSetPrice, setIsDraftThenSetPrice] = useState(false);
  const onSubmit = (values: Record<string, string>) => {
    alert(JSON.stringify(values));
  };

  const handleBlurFirstName = (form: any, values: Record<string, string>) => {
    if (values?.firstName !== '') {
      form.batch(() => {
        form.change('phoneNumber', '');
        form.change('email', '');
        form.change('currency', '');
        form.change('price', '');
      });
    }
  };

  const handleBlurPanelB = (form: any, values: Record<string, string>) => {
    form.batch(() => {
      form.change('currency', '');
      form.change('price', '');
    });
  };

  useEffect(() => {
    if (isDraft) {
      setIsDraftThenSetPrice(true);
    }
  }, [isDraft]);

  useEffect(() => {
    if (isDraftThenSetPrice) {
      setIsDraftThenSetPrice(false);
    }
  }, [isDraftThenSetPrice]);

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        // in order to pass values around, we need to subscribe to it
        subscription={{ submitting: true, pristine: true, values: true }}
      >
        {({ handleSubmit, form, values }) => (
          <form onSubmit={preventDefault}>
            <PanelA
              onBlurFirstName={handleBlurFirstName}
              form={form}
              values={values}
            />

            <PanelB form={form} values={values} handleBlur={handleBlurPanelB} />

            <PanelC form={form} isDraftThenSetPrice={isDraftThenSetPrice} />

            <Submit onClick={handleSubmit} />
          </form>
        )}
      </Form>
    </div>
  );
}

export { MyForm };
