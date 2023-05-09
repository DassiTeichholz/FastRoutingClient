import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const AxiosAddACenter = () => {
  const location = useLocation();
  const centerName = location.state.centerName;
  const jsonFile = location.state.jsonFile;
  const imagesArr=location.state.imagesArr;
  const [loading, setLoading] = useState(false);

  const handleSendData = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('centerName', centerName);
      formData.append('jsonFile', JSON.stringify(jsonFile));
      imagesArr.forEach((image, index) => {
        formData.append(`imagesArr[${index}].item`, image.item);
        formData.append(`imagesArr[${index}].floor`, image.floor);
        formData.append(`imagesArr[${index}].img`, image.img);
      });
      await axios.post('https://localhost:7227/api/nisuy_', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // הצלחנו לשלוח את המידע לשרת
    } catch (error) {
      // קרתה שגיאה בשליחת המידע לשרת
    }
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleSendData} disabled={loading}>
        {loading ? 'שולח...' : 'שלח דגל לשרת'}
      </button>
    </div>
  );
};

export default AxiosAddACenter;
