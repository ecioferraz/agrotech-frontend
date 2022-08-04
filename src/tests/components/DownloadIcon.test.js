import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { DownloadIcon } from '../../components';

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

  describe('<DownloadIcon />', () => {
    let downloadIcon;

    beforeEach(() => {
      act(() => root.render(<DownloadIcon />));

      downloadIcon = container.querySelector('div');
    });

    afterEach(() => {
      downloadIcon = null;
    });

    it('should render a div', () => {
      expect(downloadIcon).toBeTruthy();
    });

    it('should render a FontAwesomeIcon element inside of the div', () => {
      expect(downloadIcon.children[0].tagName).toBe('svg');
    });
  });
});
