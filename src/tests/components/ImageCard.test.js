import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ImageCard } from '../../components';

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

  describe('<ImageCard />', () => {
    let imageCard;
    
    beforeEach(() => {
      act(() => {
        root.render(
          <ImageCard
            imageURL="https://picsum.photos/200/300"
            name="Isle 1"
          />,
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
  
    it('should render a div with the image', () => {
      const imageCardContent = imageCard.children[0];
      expect(imageCardContent).toBeTruthy();
      expect(imageCardContent.getAttribute('src'))
        .toBe('https://picsum.photos/200/300');
    });
  });
});
