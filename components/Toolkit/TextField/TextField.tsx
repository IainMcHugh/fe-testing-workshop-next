import type { InputHTMLAttributes } from 'react';
import { Label, Input } from '../../../styles';
import { RenderCount } from '../RenderCount/RenderCount';
import { RelativeContainer } from '../../../styles';

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function TextField({ id, label, ...rest }: ITextField) {
  return (
    <RelativeContainer>
      <RenderCount />
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} id={id} />
    </RelativeContainer>
  );
}

export { TextField };
