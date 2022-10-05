import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { usePanelC } from '../hooks/usePanelC';

const mockFirstName = 'FIRST_NAME_TEST';
const mockLastName = 'LAST_NAME_TEST';
const mockCurrency = 'EUR';
const mockChange = jest.fn();
const mockBatch = jest.fn();
const mockGetFieldState = jest.fn().mockReturnValue({ value: mockCurrency });

const mockFieldSubscriptions = {
  firstName: mockFirstName,
  lastName: mockLastName,
};

const mockFormMethods = {
  batch: mockBatch,
  change: mockChange,
  getFieldState: mockGetFieldState,
};

const mockProps = {
  fieldSubscriptions: mockFieldSubscriptions,
  formMethods: mockFormMethods,
};

describe('usePanelC', () => {
  afterEach(cleanup);
  test('handleBlurFirstName', () => {
    const { result } = renderHook(() => usePanelC(mockProps));
    result.current.handleBlurFirstName();
    expect(mockBatch).toBeCalled();
  });

  test('if currency is "EUR" and last name is set to "fe-connect", the currency should be updated to "USD"', () => {
    const { rerender } = renderHook(() => usePanelC(mockProps));
    expect(mockChange).not.toBeCalled();
    mockProps.fieldSubscriptions.lastName = 'fe-connect';
    rerender();
    expect(mockChange).toBeCalledWith('currency', 'USD');
  });

  test('handleBlurPanelB', () => {
    const { result } = renderHook(() => usePanelC(mockProps));
    result.current.handleBlurPanelB();
    expect(mockBatch).toBeCalled();
  });
});
