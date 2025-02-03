import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/Main'
import "./css/index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
