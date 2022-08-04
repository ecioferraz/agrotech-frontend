import React from 'react';
import { createRoot } from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';
import { TextInput } from '../../components';

describe('Components', () => {
  let container = null;
  let root = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount(container));
    container.remove();
    container = null;
  });

  describe('<TextInput />', () => {
    let textInput;

    const onChange = jest.fn();

    beforeEach(() => {
      act(() => {
        root.render(
          <TextInput
            className='test'
            name='test'
            labelText='test'
            value='test'
            onChange={ onChange }
            type='text'
          />,
        );
      });

      textInput = container.querySelector('input');
    });

    afterEach(() => {
      textInput = null;
    });

    it('should render a text input', () => {
      expect(textInput).toBeTruthy();
    });

    it('should render the text input props correctly', () => {
      expect(textInput.getAttribute('class')).toBe('test');
      expect(textInput.getAttribute('name')).toBe('test');
      expect(textInput.value).toBe('test');
      expect(textInput.getAttribute('id')).toBe('test');
      expect(textInput.getAttribute('type')).toBe('text');
      expect(textInput.getAttribute('placeholder')).toBe('');
    });

    it('should render the text input label correctly', () => {
      const label = container.querySelector('label');
      expect(label.textContent).toBe('test ');
      expect(label.getAttribute('for')).toBe('test');
    });

    it('should respond to change correctly', () => {
      act(() => {
        Simulate.change(textInput, { target: { value: 'test2' } });
        Simulate.change(textInput, { target: { value: 'test' } });
      });
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });
});
