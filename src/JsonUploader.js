import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './ImageUploader.css';

function JsonUploader() {
  const location = useLocation();
  let Navigate=useNavigate()
  
  const centerName = location.state?.centerName;
  debugger
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [jsonFile, setJsonFile] = useState(null)
 // const floorRef = useRef(0)

  //const { setAllDetails, AllDetails, item } = props

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
    

    const jsonFile1 = event.dataTransfer.files[0];
    if (jsonFile1.type !== 'application/json') {
      setError(true);
      setMessage('An invalid file was uploaded, please upload a JSON file!');
      return;
    }
    setJsonFile(jsonFile1);

    const reader = new FileReader();
    reader.readAsDataURL(jsonFile1);
    reader.onload = (event) => {
      setFile(event.target.result);
      setError(false);
      setMessage('The json file was dragged successfully');
    };

    setDragOver(false);
  };

  const handleFileSelect = (event) => {
   

    const jsonFile1 = event.target.files[0];
    if (jsonFile1.type !== 'application/json') {
      setError(true);
      setMessage('An invalid file was uploaded, please upload a JSON file!');
      return;
    }
    setJsonFile(jsonFile1);

    const reader = new FileReader();
    reader.readAsDataURL(jsonFile1);
    reader.onload = (event) => {
      setFile(event.target.result);
      setError(false);
      setMessage('The json was uploaded successfully');
    };
  };
  
  const ssss=()=>{
    debugger
   if(jsonFile==null){
    document.getElementById("div").style.display="block";
    return;
   }
   document.getElementById("div").style.display="none"

    console.log(jsonFile);
    Navigate("/MyComponentContainer", { state: { centerName: centerName ,jsonFile:jsonFile} });
    
  }

  return (
    < >
    <h1>גרור קובץ ג'ייסון המכיל את פרטי המרכז החדש</h1>
    <div id="frame">
    <div
      className={`image-drop-area ${dragOver ? 'drag-over' : ''} ${error ? 'error' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-input' ).click()}
    >
      <div className="image-drop-message">
        <p>{message || 'Drag an image here or click to select'}</p>
      </div>
      {file && <img className="preview-image" src={file} alt="Preview" />}
      <input
        type="file"
        id={'file-input'}
        accept=".json"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div><br></br>
   
    </div>
    <button onClick={ssss}>הבא</button>
    
    <div id="div" style={{ display: 'none' }} >לא הוכנס דף ג'ייסון</div>
    </>
  );
}


export default JsonUploader;
