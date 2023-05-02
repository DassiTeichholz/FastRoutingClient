import React, { useState } from 'react';
import axios from 'axios';


const MyComponent = () => {
  const [loading, setLoading] = useState(false);

  const handleSendData = async () => {
    setLoading(true);
    try {
      await axios.post('/api/nisuy_', 'jjj');
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

export default MyComponent;
