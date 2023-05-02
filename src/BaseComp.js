import { useState } from 'react';
import './BaseComp.css'; // Import your CSS file here
import img from './assets/logo.png'

function BaseComp() {
  const [activeButton, setActiveButton] = useState('home'); // State to keep track of active button

  // Function to handle button clicks and update activeButton state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <nav className="navigation-bar">
      <ul>
        <li className={activeButton === 'home' ? 'active' : ''}>
          <button onClick={() => handleButtonClick('home')}>Home</button>
        </li>
        <li className={activeButton === 'about' ? 'active' : ''}>
          <button onClick={() => handleButtonClick('about')}>About</button>
        </li>
        <li className={activeButton === 'contact' ? 'active' : ''}>
          <button onClick={() => handleButtonClick('contact')}>Contact</button>
        </li>
      </ul>
      <div className="original-and-beautiful"><img id='img'src={img} alt="logo" />
</div>
    </nav>
  );
}

export default BaseComp;
