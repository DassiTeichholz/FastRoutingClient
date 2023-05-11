import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const AxiosAddACenter = () => {
  const location = useLocation();
  const centerName = location.state.centerName;
  const jsonFile = location.state.jsonFile;
  const imagesArr=location.state.imagesArr;
 
  useEffect(() => {
    sendTheMallPhotos();
  }, []);

  const convertToByteArray = async (url) => {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const byteArray = Array.from(new Uint8Array(response.data));
      return byteArray;
    } catch (error) {
      throw new Error('Error converting image to byte array');
    }
  };

  const sendTheMallPhotos = async () => {
    try {
      const theMallPhotos = await Promise.all(
        imagesArr.map(async (item) => {
          const byteArray = await convertToByteArray(item.img);
          let floor1=item.floor
          return {
            theMallPhotoId: 0,
            image: byteArray,
            floor:parseInt(floor1, 10) ,
            centerId: 0
          };
        })
      );
      // const config = {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // };
      debugger
      let c={theMallPhoto:theMallPhotos,centerName:centerName,jsonFile:jsonFile}
      let anss=await axios.post('https://localhost:7227/api/nisuy_', c);
      console.log('TheMallPhotos sent successfully!');
    } catch (error) {
      console.error('Error sending TheMallPhotos:', error);
    }

  };

  return (
    <div>
      {/* Rendering component */}
    </div>
  );
 
};

export default AxiosAddACenter;


// const [loading, setLoading] = useState(false);

  // const handleSendData = async () => {
  //   setLoading(true);
  //   try {
  //     const formData = new FormData();
  //     formData.append('centerName', centerName);
  //     formData.append('jsonFile', JSON.stringify(jsonFile));
  //     imagesArr.forEach((image, index) => {
  //       formData.append(`imagesArr[${index}].item`, image.item);
  //       formData.append(`imagesArr[${index}].floor`, image.floor);
  //       formData.append(`imagesArr[${index}].img`, image.img);
  //     });
  //     await axios.post('https://localhost:7227/api/nisuy_', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     // הצלחנו לשלוח את המידע לשרת
  //   } catch (error) {
  //     // קרתה שגיאה בשליחת המידע לשרת
  //   }
  //   setLoading(false);
  // };

  // return (
  //   <div>
  //     <button onClick={handleSendData} disabled={loading}>
  //       {loading ? 'שולח...' : 'שלח דגל לשרת'}
  //     </button>
  //   </div>
  // );
