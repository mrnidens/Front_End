import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'
import Contact from './components/Contact.tsx'
import StarWars from './components/StarWars.tsx'
import AboutMe from './components/AboutMe.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render (
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

