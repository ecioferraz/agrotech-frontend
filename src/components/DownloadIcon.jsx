import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function DownloadIcon() {
  return (
    <div className="download-icon">
      <FontAwesomeIcon icon={faDownload} />
    </div>
  );
}
