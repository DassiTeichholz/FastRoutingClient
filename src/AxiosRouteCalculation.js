import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosRouteCalculation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/myendpoint', {
          params: {
            nameSource: 'exampleNameSource',
            nameDestination: 'exampleNameDestination',
            idCenter: 123
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((floor, index) => (
          <li key={index}>
            <h2>Floor {index + 1}</h2>
            <p>Directions: {floor.directions.join(', ')}</p>
            <p>Vertices: {floor.verticesOfFloor.length}</p>
            <p>Photos: {floor.TheCenterPhotoDTO.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosRouteCalculation;
