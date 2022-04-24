import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
//used for rouuting or navigating in the top
import {BrowserRouter} from 'react-router-dom' 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);