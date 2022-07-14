import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // El "StrictMode" solo se usa en desarrollo, al momento de construir con "build" se quitara de forma automatica
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)

// OsplqUAzsJ2Mmq8nHpZxg2YJvN8jKMnL