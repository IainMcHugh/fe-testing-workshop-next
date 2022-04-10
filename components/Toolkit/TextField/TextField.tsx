import type { InputHTMLAttributes } from 'react';
import { Label, Input } from '../../../styles';
import { RenderCount } from '../RenderCount/RenderCount';
import * as S from '../../../styles';

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function TextField({ id, label, error, ...rest }: ITextField) {
  return (
    <S.RelativeContainer>
      <RenderCount />
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} id={id} error={Boolean(error)} />
      <S.Error>{error && error}</S.Error>
    </S.RelativeContainer>
  );
}

export { TextField };
