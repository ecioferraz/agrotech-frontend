import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { TextCard } from '../../components';

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

  describe('<TextCard />', () => {
    let textCard;

    beforeEach(() => {
      act(() => {
        root.render(
          <TextCard
            className='test'
            text='test'
          />,
        );
      });

      textCard = container.querySelector('.text-card-text');
    });

    afterEach(() => {
      textCard = null;
    });

    it('should render a div', () => {
      expect(textCard).toBeTruthy();
    });

    it('should render a paragraph element inside of the div', () => {
      expect(textCard.tagName).toBe('P');
      expect(textCard.textContent).toBe('test');
    });
  });
});
