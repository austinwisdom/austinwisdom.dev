import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.tsx'
import AboutPage from './pages/About/AboutPage.tsx';
import Header from './components/Header/Header.tsx';
import './index.css'

export enum ROUTES {
  HOME = '/',
  ABOUT = '/about'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path={ROUTES.HOME} element={<App />}/>
        <Route path={ROUTES.ABOUT} element={<AboutPage />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
