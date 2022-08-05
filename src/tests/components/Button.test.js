import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Button } from '../../components';

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

  describe('<Button />', () => {
    let button;

    const onClick = jest.fn();

    beforeEach(async () => {
      act(() => {
        root.render(
          <Button
            type='button'
            className='test'
            handleClick={ onClick }
            name='test'
          />,
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
});
