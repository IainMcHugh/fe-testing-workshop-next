import { FormSpy } from 'react-final-form';

import * as S from '../../../styles';

function Spy() {
  return (
    <FormSpy subscription={{ values: true }}>
      {({ values }) => <S.Spy>{JSON.stringify(values, null, 4)}</S.Spy>}
    </FormSpy>
  );
}

export { Spy };
