import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { StatusCard } from '../../components';

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

  describe('<StatusCard />', () => {
    let statusCard;

    beforeEach(() => {
      act(() => {
        root.render(
          <StatusCard
            status='test'
          />,
        );
      });

      statusCard = container.querySelector('div');
    });

    afterEach(() => {
      statusCard = null;
    });

    it('should render a div', () => {
      expect(statusCard).toBeTruthy();
    });

    it('should render a paragraph element inside of the div', () => {
      expect(statusCard.children[0].tagName).toBe('P');
      const paragraph = statusCard.children[0];
      expect(paragraph.textContent).toBe('test');
      expect(paragraph.className).toBe('active-status');
    });
  });
});
