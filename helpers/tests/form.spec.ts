import { handleErrors, required } from '../form';

type TMockMeta = { [key: string]: string | boolean | undefined };

let mockMeta: TMockMeta = {
  touched: false,
  error: undefined,
  submitError: undefined,
};

const mockValue = 'TEST_VALUE';

describe('form helper unit tests', () => {
  beforeEach(() => {
    mockMeta = {
      touched: false,
      error: undefined,
      submitError: undefined,
    };
  });
  test('handleErrors, if not touched will not return error', () => {
    expect(handleErrors(mockMeta)).toBeUndefined();
  });

  test('handleErrors, if touched but no errors will not return error', () => {
    mockMeta.touched = true;
    expect(handleErrors(mockMeta)).toBeUndefined();
  });

  test('handleErrors, if touched and error will return error', () => {
    mockMeta.touched = true;
    mockMeta.error = 'TEST_ERROR';
    expect(handleErrors(mockMeta)).toBe(mockMeta.error);
  });

  test('handleErrors, if touched and submitError will return submitError', () => {
    mockMeta.touched = true;
    mockMeta.submitError = 'TEST_SUBMIT_ERROR';
    expect(handleErrors(mockMeta)).toBe(mockMeta.submitError);
  });

  test('handleErrors, if touched and all errors will return error', () => {
    mockMeta.touched = true;
    mockMeta.error = 'TEST_ERROR';
    mockMeta.submitError = 'TEST_SUBMIT_ERROR';
    expect(handleErrors(mockMeta)).toBe(mockMeta.error);
  });
});

describe('required', () => {
  test('required, if empty value returns undefined', () => {
    expect(required('')).toBe('This field is required');
  });

  test('required, if empty value returns undefined', () => {
    expect(required(mockValue)).toBeUndefined();
  });
});
