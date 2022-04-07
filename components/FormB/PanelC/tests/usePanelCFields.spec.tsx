import type { ReactNode } from 'react';
import { Form } from 'react-final-form';
import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { usePanelCFields } from '../hooks/usePanelCFields';

const mockFirstName = 'FIRST_NAME_TEST';
let mockLastName = 'LAST_NAME_TEST';
let mockCurrency = 'EUR';

const mockInitialValues = {
  firstName: mockFirstName,
  lastName: mockLastName,
  currency: mockCurrency,
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <Form onSubmit={jest.fn()} initialValues={mockInitialValues}>
    {() => <form>{children}</form>}
  </Form>
);

describe('usePanelCFields', () => {
  afterEach(cleanup);

  test('field state is loaded correctly', () => {
    const { result } = renderHook(() => usePanelCFields(), {
      wrapper,
    });
    expect(result.current.firstName).toBe(mockFirstName);
    expect(result.current.lastName).toBe(mockLastName);
    expect(result.current.currency).toBe(mockCurrency);
  });
});
