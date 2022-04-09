import { useFormState } from 'react-final-form';

import { Panel } from '../../../Toolkit/Panel/Panel';
import * as S from '../../../../styles';

function FormError() {
  const { submitError } = useFormState();
  return (
    <>
      {submitError && (
        <Panel>
          <S.FormError>{submitError}</S.FormError>
        </Panel>
      )}
    </>
  );
}

export { FormError };
