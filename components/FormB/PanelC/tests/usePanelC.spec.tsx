import type { ReactNode } from 'react';
import { Form } from 'react-final-form';
import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { usePanelC } from '../hooks/usePanelC';

let mockFirstName = 'FIRST_NAME_TEST';
let mockLastName = 'LAST_NAME_TEST';
let mockCurrency = 'EUR';

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
    getFieldState: () => ({
      value: mockCurrency,
    }),
  }),
}));

describe('usePanelC', () => {
  beforeEach(() => {
    mockFirstName = 'FIRST_NAME_TEST';
    mockLastName = 'LAST_NAME_TEST';
  });
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  afterAll(jest.resetAllMocks);
  test('handleBlurFirstName', () => {
    const { result } = renderHook(
      () => usePanelC(mockFirstName, mockLastName),
      {
        wrapper,
      },
    );
    result.current.handleBlurFirstName();
    expect(mockBatch).toBeCalled();
  });

  test('should call change correctly if lastname and currency', () => {
    const { rerender } = renderHook(
      () => usePanelC(mockFirstName, mockLastName),
      {
        wrapper,
      },
    );

    expect(mockChange).not.toBeCalled();

    mockLastName = 'messy';
    rerender();
    expect(mockChange).toBeCalledWith('currency', 'USD');
  });

  test('handleBlurPanelB', () => {
    const { result } = renderHook(
      () => usePanelC(mockFirstName, mockLastName),
      {
        wrapper,
      },
    );

    result.current.handleBlurPanelB();
    expect(mockBatch).toBeCalled();
  });
});
