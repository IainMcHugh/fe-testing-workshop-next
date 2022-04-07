import { PanelA } from '../PanelA/PanelA';
import { PanelB } from '../PanelB/PanelB';
import { PanelC } from '../PanelC/PanelC';
import { Submit } from '../Submit/Submit';
import { useDraft } from '../hooks/useDraft';
import { preventDefault } from '../../../helpers/preventDefault';

interface IMyForm {
  isDraft: boolean;
}

function MyForm({ isDraft }: IMyForm) {
  useDraft(isDraft);
  return (
    <form onSubmit={preventDefault}>
      <PanelA />
      <PanelB />
      <PanelC />
      <Submit />
    </form>
  );
}

export { MyForm };
