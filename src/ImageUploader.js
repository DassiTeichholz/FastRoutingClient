import React, { useState } from 'react';
import './ImageUploader.css';

function ImageUploader(props) {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');


  const { setAllDetails, AllDetails, item } = props

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files.length === 0) {
      setError(true);
      setMessage('An invalid file was uploaded, please upload an image!');
      return;
    }

    const imageFile = event.dataTransfer.files[0];
    if (!imageFile.type.startsWith('image/')) {
      setError(true);
      setMessage('An invalid file was uploaded, please upload an image!');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = (event) => {
      setFile(event.target.result);
      setError(false);
      setMessage('The image was dragged successfully');
    };

    setDragOver(false);
  };

  const handleFileSelect = (event) => {

    const imageFile = event.target.files[0];
    if (AllDetails&&AllDetails.length > 0) {
      setAllDetails(AllDetails.filter(p => p.item != item))
    }
    setAllDetails(alldetails => [...alldetails, { item: item, img: imageFile }])


    if (!imageFile.type.startsWith('image/')) {
      setError(true);
      setMessage('An invalid file was uploaded, please upload an image!');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = (event) => {
      setFile(event.target.result);
      setError(false);
      setMessage('The image was uploaded successfully');
    };
  };

  return (
    <div
      className={`image-drop-area ${dragOver ? 'drag-over' : ''} ${error ? 'error' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-input' + item).click()}
    >
      <div className="image-drop-message">
        <p>{message || 'Drag an image here or click to select'}</p>
      </div>
      {file && <img className="preview-image" src={file} alt="Preview" />}
      <input
        type="file"
        id={'file-input' + item}
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default ImageUploader;
