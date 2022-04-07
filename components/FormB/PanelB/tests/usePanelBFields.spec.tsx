import type { ReactNode } from 'react';
import { Form } from 'react-final-form';
import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { usePanelBFields } from '../hooks/usePanelBFields';

const mockFirstName = 'FIRST_NAME_TEST';

const mockInitialValues = {
  firstName: mockFirstName,
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <Form onSubmit={jest.fn()} initialValues={mockInitialValues}>
    {() => <form>{children}</form>}
  </Form>
);

describe('usePanelBFields', () => {
  afterEach(cleanup);

  test('field state is loaded correctly', () => {
    const { result, rerender } = renderHook(() => usePanelBFields(), {
      wrapper,
    });
    rerender();
    expect(result.current.firstName).toBe(mockFirstName);
  });
});
