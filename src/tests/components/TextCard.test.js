import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { TextCard } from '../../components';

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

  describe('<TextCard />', () => {
    let textCard;

    beforeEach(() => {
      act(() => {
        render(
          <TextCard
            className='test'
            text='test'
          />,
          container,
        );
      });

      textCard = container.querySelector('div');
    });

    afterEach(() => {
      textCard = null;
    });

    it('should render a div', () => {
      expect(textCard).toBeTruthy();
    });

    it('should render a paragraph element inside of the div', () => {
      expect(textCard.children[0].tagName).toBe('P');
      const paragraph = textCard.children[0];
      expect(paragraph.textContent).toBe('test');
    });
  });
});
