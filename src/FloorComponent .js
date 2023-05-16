import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FloorComponent = () => {
  const [floors, setFloors] = useState([]);
  const nameSource = 'Example Source'; // ערכי המשתנים המתאימים לפרמטרים בקונטרולר
  const nameDestination = 'Example Destination';
  const idCenter = 123;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7227/api/nisuy_',{
            params: { nameSource, nameDestination, idCenter },
          }); // Replace with your API endpoint
        const data = response.data;
        setFloors(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Floors</h1>
      {floors.map((floor) => (
        <div key={floor.floorId}>
          <h2>Floor {floor.floorId}</h2>
          {/* Render other floor properties here */}
        </div>
      ))}
    </div>
  );
};

export default FloorComponent;
