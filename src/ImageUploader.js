import React, { useState, useRef,useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import './ImageUploader.css';

function ImageUploader(props) {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const floorRef = useRef(-70)
  let imageFile='';

  const { setAllDetails, AllDetails, item } = props


  useEffect(() => {
    if (floorRef.current.valueAsNumber !== -70 && file !== null) {
      setAllDetails(alldetails => [...alldetails, { item: item, img: imageFile.current ,floor:floorRef.current.value}])
      debugger
    }
  }, [floorRef, file]);

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

    imageFile = event.dataTransfer.files[0];
    if (AllDetails&&AllDetails.length > 0) {
      setAllDetails(AllDetails.filter(p => p.item != item))
    }
    // setAllDetails(alldetails => [...alldetails, { item: item, img: imageFile.current ,floor:floorRef.current.value}])
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

    imageFile = event.target.files[0];
    if (AllDetails&&AllDetails.length > 0) {
      setAllDetails(AllDetails.filter(p => p.item != item))
    }
    
    // setAllDetails(alldetails => [...alldetails, { item: item, img: imageFile,floor:floorRef.current.value   }])
   console.log(floorRef.current.value )
    
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
    < >
    <div id="frame">
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
    </div><br></br>
    <input ref={floorRef} type='number'/>
    </div>
    </>
  );
}

export default ImageUploader;
