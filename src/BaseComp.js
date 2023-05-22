import { useState } from 'react';
import './BaseComp.css'; // Import your CSS file here
import img from './assets/logo.png'
import { Navigate, Outlet } from 'react-router';
import { Link,useNavigate } from 'react-router-dom';

function BaseComp() {
  const [activeButton, setActiveButton] = useState('home'); // State to keep track of active button
   let Navigate=useNavigate()
  // Function to handle button clicks and update activeButton state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if(buttonName=='home'){
      Navigate('/Manager')
    }
    if(buttonName=='about'){
      Navigate('/About')
    }
  }

  return (
    <>
    
    <nav className="navigation-bar">
      <ul>
        <li className={activeButton === 'about' ? 'active' : ''}>
          <button onClick={() => handleButtonClick('about')}>אודות</button>
        </li>
        <li className={activeButton === 'home' ? 'active' : ''}>
          {/* <Link  to="Manager">manager</Link> */}
          <button onClick={() => handleButtonClick('home')}>ניווט</button>
        </li>
       
        <li className={activeButton === 'contact' ? 'active' : ''}>
          <button onClick={() => handleButtonClick('contact')}>יצירת קשר</button>
        </li>
        <li className={activeButton === 'manager' ? 'active' : ''}>
          <button onClick={() => handleButtonClick('manager')}>הוספת מרכז</button>
        </li>
      </ul>
      <div className="original-and-beautiful"><img id='img'src={img} alt="logo" />
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default BaseComp;
