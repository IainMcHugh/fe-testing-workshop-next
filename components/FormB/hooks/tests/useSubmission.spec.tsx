import { renderHook } from '@testing-library/react-hooks';
import { cleanup, waitFor } from '@testing-library/react';
import { useSubmission } from '../useSubmission';
import formApi from '../../../../api/formApi';

const mockFirstName = 'FIRST_NAME_TEST';
const mockLastName = 'LAST_NAME_TEST';
const mockPhoneNumber = 'PHONE_NUMBER_TEST';
const mockEmail = 'EMAIL_TEST';
const mockCurrency = 'EUR';
const mockPrice = '1011';

const mockSubmissionValues = {
  firstName: mockFirstName,
  lastName: mockLastName,
  phoneNumber: mockPhoneNumber,
  email: mockEmail,
  currency: mockCurrency,
  price: mockPrice,
};

describe('useSubmission', () => {
  afterEach(() => {
    cleanup();
  });
  afterAll(jest.resetAllMocks);

  test('should call  correctly', async () => {
    const mockFormSubmitResponse = jest
      .spyOn(formApi, 'submitForm')
      .mockResolvedValueOnce({
        message: 'Submitted',
      });
    const { result } = renderHook(() => useSubmission());
    result.current.handleSubmit(mockSubmissionValues);
    await waitFor(() => {
      expect(mockFormSubmitResponse).toBeCalledWith(mockSubmissionValues);
    });
  });
});
