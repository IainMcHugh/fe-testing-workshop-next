import type { InputHTMLAttributes } from 'react';
import { RenderCount } from '../RenderCount/RenderCount';
import { RelativeContainer } from '../styles';

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function TextField({ name, label, ...rest }: ITextField) {
  return (
    <RelativeContainer>
      <RenderCount />
      <label htmlFor={name}></label>
      <input {...rest} />
    </RelativeContainer>
  );
}

export { TextField };
