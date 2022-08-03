import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { Button, TextInput } from '../components';

describe('Components', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('<Button />', () => {
    let button;

    const onClick = jest.fn();

    beforeEach(async () => {
      act(() => {
        render(
          <Button
            type="button"
            className="test"
            handleClick={ onClick }
            name="test"
          />,
          container,
        );
      });

      button = container.querySelector('button');
    });

    afterEach(() => button = null);

    it('should render a button', () => {
      expect(button).toBeTruthy();
    });

    it('should render button\'s properties correctly', () => {
      expect(button.getAttribute('type')).toBe('button');
      expect(button.getAttribute('name')).toBe('test');
      expect(button.getAttribute('class')).toBe('test');
    });

    it('should render button\'s inner text correctly', () => {
      expect(button.textContent).toBe('test');
    });

    it('should not render a disabled and clickable button', () => {
      expect(button).not.toBeDisabled();

      act(() => button.click());

      expect(onClick).toHaveBeenCalled();
    });

    it('should render a disabled and unclickable button', () => {
      expect(button).not.toBeDisabled();
      button.disabled = true;
      expect(button).toBeDisabled();

      act(() => button.click());

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('<TextInput />', () => {
    let textInput;

    const onChange = jest.fn();

    beforeEach(() => {
      act(() => {
        render(
          <TextInput
            className="test"
            name="test"
            labelText="test"
            value="test"
            onChange={ onChange }
            type="text"
          />,
          container,
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
