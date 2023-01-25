import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { DataBaseManager } from './Pages/DataManager';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/Gerenciar de mensagens' element = {<DataBaseManager/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
