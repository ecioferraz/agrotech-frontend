import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { StatusCard } from '../../components';

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

  describe('<StatusCard />', () => {
    let statusCard;

    beforeEach(() => {
      act(() => {
        render(
          <StatusCard
            status='test'
          />,
          container,
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
      expect(paragraph.className).toBe('status');
    });
  });
});
