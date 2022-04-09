import { useState, useEffect } from 'react';
import { Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

import formApi from '../../../api/formApi';
import { preventDefault } from '../../../helpers/preventDefault';
import { Spy } from '../../Toolkit/Spy/Spy';
import { PanelA } from '../PanelA/PanelA';
import { PanelB } from '../PanelB/PanelB';
import { PanelC } from '../PanelC/PanelC';
import { Submit } from '../Submit/Submit';

interface IMyForm {
  isDraft?: boolean;
}

function MyForm({ isDraft }: IMyForm) {
  const [isDraftThenSetPrice, setIsDraftThenSetPrice] = useState(false);
  const onSubmit = async (values: Record<string, string>) => {
    try {
      const { message } = await formApi.submitForm(values);
      alert(message);
    } catch (error: any) {
      console.log(error.message);
      return { [FORM_ERROR]: error.message };
    }
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
        subscription={{ submitting: true, pristine: true, values: true }}
      >
        {({ handleSubmit, form, values, submitError }) => (
          <form
            onSubmit={(e) => {
              preventDefault(e);
              handleSubmit();
            }}
          >
            <PanelA
              onBlurFirstName={handleBlurFirstName}
              form={form}
              values={values}
            />
            <PanelB form={form} values={values} handleBlur={handleBlurPanelB} />
            <PanelC form={form} isDraftThenSetPrice={isDraftThenSetPrice} />
            <Submit onClick={handleSubmit} />
            <Spy />
            {submitError && <p>{submitError}</p>}
          </form>
        )}
      </Form>
    </div>
  );
}

export { MyForm };
