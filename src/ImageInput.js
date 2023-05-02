import React, { useState } from 'react';
import './ImageInput.css';

const ImageInput = ({ onSubmit }) => {
  const [floor, setFloor] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image && floor) {
      onSubmit({ image, floor });
      setImage('');
      setFloor('');
    }
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="image-input">
        <div className="image-preview">
          {image ? (
            <img src={image} alt="Preview" className="preview-image" />
          ) : (
            <div className="preview-placeholder">No Image Selected</div>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="floor-input">Insert floor:</label>
          <input
            type="number"
            id="floor-input"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button type="submit">Add Image</button>
        </div>
      </div>
    </form>
  );
};

export default ImageInput;
