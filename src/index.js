import React from 'react';
import './index.css';
import Manager from './Manager';
import BaseComp from './BaseComp';
import JsonUploader from './JsonUploader';
import About from './About';
import ImageUploader from './ImageUploader';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import MyComponentContainer from './copyComp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<BaseComp/>} >
          <Route path='/Manager' element={<Manager />} />
          <Route  path='/About' element={<About/>}></Route>
          <Route path='/JsonUploader' element={<JsonUploader/>}></Route>
          <Route path='/ImageUploader' element={<ImageUploader/>}></Route>
          <Route path='/MyComponentContainer' element={<MyComponentContainer/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
