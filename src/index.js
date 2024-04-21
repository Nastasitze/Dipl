import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./output.css";
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import SideMenu from './components/SideMenu';
import ListCreateIntensiv from './components/ListCreateIntensiv';
import Intensives from './components/Intensives';
import Commands from './components/Commands';
import CreateCommand from './components/CreateCommand';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
    {/* <div className='body'> */}
    {/* <SideMenu/> */}
    {/* <Intensives/> */}
    {/* <ListCreateIntensiv/> */}
    {/* <Commands/> */}
    {/* <CreateCommand/> */}
    {/* </div> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
