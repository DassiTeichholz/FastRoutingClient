// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const AxiosAddACenter = () => {
//   const location = useLocation();
//   const InputString = location.state.centerName;
//   const JsonObject = location.state.jsonFile;
//   const imagesArr = location.state.imagesArr;
//   useEffect(() => {
    
//     const sendDataToServer = async () => {
//       try {
//         const jsonFile = location.state.jsonFile;
//         const jsonString = JSON.stringify(jsonFile);
//         const response = await axios.post('https://localhost:7227/api/nisuy_', jsonString, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         // console.log('Server response:', response.data);
//       } catch (error) {
//         console.error('Error sending request:', error);
//       }
//     };

//     sendDataToServer();
//   }, [JsonObject]);

//   return <div>{/* Rendering component */}</div>;
// };

// export default AxiosAddACenter;






// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const AxiosAddACenter = () => {
//   const location = useLocation();
//   const InputString = location.state.centerName;
//   const JsonObject = location.state.jsonFile;
//   const imagesArr = location.state.imagesArr;
//    useEffect(() => {
//     sendTheMallPhotos();
//   }, []);

//   const sendTheMallPhotos = async () => {
//     try {
//     const jsonFile = location.state.jsonFile;
//         const jsonString = JSON.stringify(jsonFile);
//       const transformedArray = imagesArr.map((image) => ({
//         image: image.img,
//         floor: image.floor,
//       }));
      
//    debugger
//       await axios.post('https://localhost:7227/api/nisuy_', transformedArray);
//       console.log('TheMallPhotos sent successfully!');
//     } catch (error) {
//       console.error('Error sending TheMallPhotos:', error);
//     }
//   };

  

//   return <div>{/* Rendering component */}</div>;
// };

// export default AxiosAddACenter;




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
    const jsonFile = location.state.jsonFile;
        const jsonString = JSON.stringify(jsonFile);
      const transformedArray = imagesArr.map((image) => ({
        image: image.img,
        floor: image.floor,
      }));
      // const requestData = {
      //   images: imagesArr,
      //   inputString: InputString,
      //   jsonObject: JsonObject
      // };
   debugger
      await axios.post('https://localhost:7227/api/nisuy_', {Images:transformedArray,JsonObject:jsonFile
       ,InputString:InputString
    });
      console.log('TheMallPhotos sent successfully!');
    } catch (error) {
      console.error('Error sending TheMallPhotos:', error);
    }
  };

  

  return <div>{/* Rendering component */}</div>;
};

export default AxiosAddACenter;





  

