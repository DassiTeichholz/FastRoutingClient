import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AxiosAddACenter = () => {
  const location = useLocation();
  const InputString = location.state.centerName;
  const JsonObject = location.state.jsonFile;
  const imagesArr = location.state.imagesArr;

  useEffect(() => {
    sendTheMallPhotos();
  }, []);

  const sendTheMallPhotos = async () => {
    try {
      const requestData = {
        Images: imagesArr.map(image => ({
          image: image.img,
          floor: image.floor
        })),
        InputString: InputString,
        JsonObject: JsonObject
      };

      await axios.post('https://localhost:7227/api/nisuy_', requestData);
      console.log('TheMallPhotos sent successfully!');
    } catch (error) {
      console.error('Error sending TheMallPhotos:', error);
    }
  };

  return <div>{/* Rendering component */}</div>;
};

export default AxiosAddACenter;






// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';


// const AxiosAddACenter = () => {
//   const location = useLocation();
//   const InputString = location.state.centerName;
//   const JsonObject = location.state.jsonFile;
//   const imagesArr=location.state.imagesArr;
 
//   useEffect(() => {
//     sendTheMallPhotos();
//   }, []);

  
    
//       const sendTheMallPhotos =async () => {
//         try{
//           debugger



//           const requestData = {
//             images: imagesArr,
//             inputString: InputString,
//             jsonObject: JsonObject
//           };
         
        
//       let anss=await axios.post('https://localhost:7227/api/nisuy_', requestData);
//       console.log('TheMallPhotos sent successfully!');
//     }
  
    
//     catch (error) {
    
//       console.error('Error sending TheMallPhotos:', error);
//     }
//   }
//   return (
//     <div>
      
//       {/* Rendering component */}
//     </div>
//   );
 
// };

// export default AxiosAddACenter;


// // const [loading, setLoading] = useState(false);

//   // const handleSendData = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const formData = new FormData();
//   //     formData.append('centerName', centerName);
//   //     formData.append('jsonFile', JSON.stringify(jsonFile));
//   //     imagesArr.forEach((image, index) => {
//   //       formData.append(`imagesArr[${index}].item`, image.item);
//   //       formData.append(`imagesArr[${index}].floor`, image.floor);
//   //       formData.append(`imagesArr[${index}].img`, image.img);
//   //     });
//   //     await axios.post('https://localhost:7227/api/nisuy_', formData, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data'
//   //       }
//   //     });
//   //     // הצלחנו לשלוח את המידע לשרת
//   //   } catch (error) {
//   //     // קרתה שגיאה בשליחת המידע לשרת
//   //   }
//   //   setLoading(false);
//   // };

//   // return (
//   //   <div>
//   //     <button onClick={handleSendData} disabled={loading}>
//   //       {loading ? 'שולח...' : 'שלח דגל לשרת'}
//   //     </button>
//   //   </div>
//   // );
// import React, { useState } from 'react';
// import axios from 'axios';

// function AxiosAddACenter() {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [inputString, setInputString] = useState('');
//   const [jsonObject, setJsonObject] = useState({});

//   const handleImageChange = (event) => {
//     const files = event.target.files;
//     const imagesArray = Array.from(files);
//     setSelectedImages(imagesArray);
//   };

//   const handleInputChange = (event) => {
//     setInputString(event.target.value);
//   };

//   const handleJsonChange = (event) => {
//     const jsonData = JSON.parse(event.target.value);
//     setJsonObject(jsonData);
//   };

//   const handleSubmit = async (event) => {
//     debugger
//     event.preventDefault();
//     if (selectedImages.length > 0) {
//       const imageDataArray = await Promise.all(
//         selectedImages.map((image) => {
//           return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result);
//             reader.onerror = reject;
//             reader.readAsDataURL(image);
//           });
//         })
//       );

//       const requestData = {
//         images: imageDataArray,
//         inputString: inputString,
//         jsonObject: jsonObject
//       };
     
//       try {
//         const response = await axios.post('https://localhost:7227/api/nisuy_', requestData);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" multiple onChange={handleImageChange} />

      

//       <textarea value={JSON.stringify(jsonObject)} onChange={handleJsonChange} />

//       <button type="submit">Upload</button>
//     </form>
//   );
// }

// export default AxiosAddACenter;

