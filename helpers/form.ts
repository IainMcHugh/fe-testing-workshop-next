import type { FieldMetaState } from 'react-final-form';

export const handleErrors = <T>(meta: FieldMetaState<T>) => {
  const { touched, error, submitError } = meta;
  if (touched && (error || submitError)) {
    return error || submitError;
  }
};

export const required = <T>(value: T) => {
  if (!value) {
    return 'This field is required';
  }
};
