import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => <ImageCard key={image.id} image={image} />);
  return <div className='image-list'>{images}</div>;
};

export default ImageList;
