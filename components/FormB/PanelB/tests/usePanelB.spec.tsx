import type { ReactNode } from 'react';
import { Form } from 'react-final-form';
import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { usePanelB } from '../hooks/usePanelB';

let mockFirstName = 'FIRST_NAME_TEST';

const wrapper = ({ children }: { children: ReactNode }) => (
  <Form onSubmit={jest.fn()}>{() => <form>{children}</form>}</Form>
);

const mockChange = jest.fn();
const mockBatch = jest.fn();

jest.mock('react-final-form', () => ({
  ...jest.requireActual('react-final-form'),
  useForm: () => ({
    change: mockChange,
    batch: mockBatch,
  }),
}));

describe('usePanelB', () => {
  beforeEach(() => {
    mockFirstName = 'FIRST_NAME_TEST';
  });
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  afterAll(jest.resetAllMocks);

  test('should call batch correctly', () => {
    const { result } = renderHook(() => usePanelB(mockFirstName), {
      wrapper,
    });
    result.current.handleBlurFirstName();
    expect(mockBatch).toBeCalled();
  });
});
