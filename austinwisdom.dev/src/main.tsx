import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.tsx'
import AboutPage from './pages/About/AboutPage.tsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.tsx';
import PageNotFoundPage from './pages/PageNotFoundPage/PageNotFoundPage.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import './index.css'
import AboutPageThreejs from './pages/AboutPageThreejs/AboutPageThreejs.tsx';

export enum ROUTES {
  HOME = '/',
  ABOUT = '/about',
  PROJECTS = '/projects',
  PAGENOTFOUND = '*',
  ABOUTTHREEJS = 'about-threejs'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path={ROUTES.HOME} element={<App />}/>
        <Route path={ROUTES.ABOUT} element={<AboutPage />}/>
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />}/>
        <Route path={ROUTES.PAGENOTFOUND} element={<PageNotFoundPage />}/>
        <Route path={ROUTES.ABOUTTHREEJS} element={<AboutPageThreejs />}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
