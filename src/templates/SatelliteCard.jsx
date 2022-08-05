import React, { useEffect, useState } from 'react';
import { DownloadIcon, ImageCard, ListImages } from '../components';
import '../styles/SatelliteCard.css';
import { getData } from '../services/APIRequests';

export default function SatelliteCard() {
  const [listImages, setListImages] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const baseUrl = 'https://s3-us-west-2.amazonaws.com';
  const imgUrl = '/planet-gallery/full/china-plain-farming-full.jpg';

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      const { data } = await getData('/images');
      setListImages(data);
      setIsLoading(false);
    };
    
    getImages();
  }, []);

  const slicePath = (path) => {
    const extImage = path.split('uploads/');
    return extImage[1];
  };

  return (
    <div className="satellite-card">
      { !isLoading ? (
        <>
          <div className="satellite-image">
            <ImageCard
              imageURL={baseUrl + imgUrl}
              name="satellite"
            />
          </div>
          <section className="satellite-body">
            <div className="satellite-download">
              <DownloadIcon />
              <p className='path-download'>
                Path:&nbsp;
                <a href={listImages[0].path}>
                  {slicePath(listImages[0].path)}
                </a>
              </p>
            </div>
            <h4>Lista de imagens</h4>
            <div className="satellite-list-images">
              <ListImages list={listImages} />
            </div>
          </section>
        </>
      ) : <div>loading...</div>
      }
    </div>
  );
}
