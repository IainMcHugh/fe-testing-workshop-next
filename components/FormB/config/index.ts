import { FieldState } from 'final-form';

export interface IFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  currency: string;
  price: string;
}

export enum FORM_VALUES {
  firstName = 'firstName',
  lastName = 'lastName',
  phoneNumber = 'phoneNumber',
  email = 'email',
  currency = 'currency',
  price = 'price',
}

export namespace TField {
  export type FirstName = IFormValues[FORM_VALUES.firstName];
  export type LastName = IFormValues[FORM_VALUES.lastName];
  export type PhoneNumber = IFormValues[FORM_VALUES.phoneNumber];
  export type Email = IFormValues[FORM_VALUES.email];
  export type Currency = IFormValues[FORM_VALUES.currency];
  export type Price = IFormValues[FORM_VALUES.price];
}

export namespace TFormMethods {
  export type Batch = (fn: () => void) => void;
  export type Change = <F extends keyof IFormValues>(
    name: F,
    value?: IFormValues[F] | undefined,
  ) => void;
  export type GetFieldState = <F extends keyof IFormValues>(
    field: F,
  ) => FieldState<IFormValues[F]> | undefined;
}
