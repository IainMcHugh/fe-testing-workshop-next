import { useEffect, useCallback } from 'react';

import { FORM_VALUES, TField, TFormMethods } from '../../../config';

interface IUsePanelC {
  fieldSubscriptions: {
    firstName?: TField.FirstName;
    lastName: TField.LastName;
  };
  formMethods: {
    batch: TFormMethods.Batch;
    change: TFormMethods.Change;
    getFieldState: TFormMethods.GetFieldState;
  };
}

const usePanelC = ({
  fieldSubscriptions: { firstName, lastName },
  formMethods: { batch, change, getFieldState },
}: IUsePanelC) => {
  const handleBlurPanelB = useCallback(() => {
    batch(() => {
      change(FORM_VALUES.currency, '');
      change(FORM_VALUES.price, '');
    });
  }, []);

  const handleBlurFirstName = useCallback(() => {
    if (firstName !== '') {
      batch(() => {
        change(FORM_VALUES.phoneNumber, '');
        change(FORM_VALUES.email, '');
        change(FORM_VALUES.currency, '');
        change(FORM_VALUES.price, '');
      });
    }
  }, []);

  useEffect(() => {
    const currency = getFieldState(FORM_VALUES.currency)?.value;
    if (lastName === 'fe-connect' && currency === 'EUR') {
      change(FORM_VALUES.currency, 'USD');
    }
  }, [lastName]);

  return { handleBlurPanelB, handleBlurFirstName };
};

export { usePanelC };
