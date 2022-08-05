import PropTypes from 'prop-types';
import React from 'react';

export default function ListImages({ list }) {
  const slicePath = (path) => {
    const extImage = path.split('Screenshot');
    return extImage[1];
  };

  return (
    <div className='satellite-list'>
      <div className="status-card">
        {list.map((imagens) => {
          return (
            // <span key={imagens.createdAt}>{slicePath(imagens.path)}</span>
            <p key={imagens.createdAt} className='path-download'>
            Path:&nbsp;
              <a href={imagens.path}>
                Screenshot{slicePath(imagens.path)}
              </a>
              &nbsp;- date: {imagens.createdAt}
            </p>
          
          );
        })}
      </div>
    </div>
  );
}

ListImages.propTypes = {
  list: PropTypes.instanceOf(Array),
};
