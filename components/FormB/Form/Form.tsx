import { Spy } from '../../Toolkit/Spy/Spy';
import { preventDefault } from '../../../helpers/preventDefault';
import { useDraft } from '../hooks/useDraft';
import Panels from '../Panels';

interface IMyForm {
  isDraft: boolean;
}

function MyForm({ isDraft }: IMyForm) {
  useDraft(isDraft);
  return (
    <form onSubmit={preventDefault} noValidate>
      <Panels.PanelA />
      <Panels.PanelB />
      <Panels.PanelC />
      <Panels.FormError />
      <Panels.Submit />
      <Spy />
    </form>
  );
}

export { MyForm };
