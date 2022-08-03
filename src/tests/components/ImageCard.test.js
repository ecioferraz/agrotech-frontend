import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ImageCard } from '../../components';

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

  describe('<ImageCard />', () => {
    let imageCard;
    
    beforeEach(() => {
      act(() => {
        render(
          <ImageCard
            imageURL={ 'https://picsum.photos/200/300' }
            name={ 'Isle 1' }
          />,
          container,
        );
      });
  
      imageCard = container.querySelector('.image-card');
    });
  
    afterEach(() => {
      imageCard = null;
    });
  
    it('should render a image card', () => {
      expect(imageCard).toBeTruthy();
    });
  
    it('should render a div with the price and image', () => {
      const imageCardContent = imageCard.children[0];
      expect(imageCardContent).toBeTruthy();
      expect(imageCardContent.getAttribute('src'))
        .toBe('https://picsum.photos/200/300');
    });
  });
});
