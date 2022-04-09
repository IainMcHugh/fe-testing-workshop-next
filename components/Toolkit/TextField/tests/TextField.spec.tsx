import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from '../TextField';

const mockChange = jest.fn();
const mockFocus = jest.fn();
const mockBlur = jest.fn();

describe('TextField', () => {
  test('label is correctly linked to input', () => {
    render(
      <TextField
        label="Test"
        name="test"
        id="test"
        value="something"
        onChange={jest.fn()}
      />,
    );

    const input = screen.getByLabelText('Test');
    expect(input).toHaveValue('something');
  });
  test('onFocus should be called', () => {
    render(
      <TextField label="Test" name="test" id="test" onFocus={mockFocus} />,
    );
    const input = screen.getByLabelText('Test');
    fireEvent.focus(input);
    expect(mockFocus).toBeCalled();
  });

  test('onChange should be called', () => {
    render(
      <TextField label="Test" name="test" id="test" onChange={mockChange} />,
    );
    const input = screen.getByLabelText('Test');
    fireEvent.change(input, { target: { value: 'something' } });
    expect(mockChange).toBeCalled();
  });

  test('onBlur should be called', () => {
    render(<TextField label="Test" name="test" id="test" onBlur={mockBlur} />);
    const input = screen.getByLabelText('Test');
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(mockBlur).toBeCalled();
  });
});
