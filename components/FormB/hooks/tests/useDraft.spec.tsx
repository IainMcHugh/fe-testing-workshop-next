import type { ReactNode } from 'react';
import { Form } from 'react-final-form';
import { renderHook } from '@testing-library/react-hooks';
import { cleanup, waitFor } from '@testing-library/react';
import { useDraft } from '../useDraft';
import formApi from '../../../../api/formApi';

const mockIsDraft = true;
const mockPrice = '1011';

const mockChange = jest.fn();

jest.mock('react-final-form', () => ({
  ...jest.requireActual('react-final-form'),
  useForm: () => ({
    change: mockChange,
  }),
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <Form onSubmit={jest.fn()}>{() => <form>{children}</form>}</Form>
);

describe('useDraft', () => {
  afterEach(() => {
    cleanup();
  });
  afterAll(jest.resetAllMocks);

  test('should update price if draft', () => {
    renderHook(() => useDraft(mockIsDraft), { wrapper });
    expect(mockChange).toBeCalledWith('price', '100');
  });
});
