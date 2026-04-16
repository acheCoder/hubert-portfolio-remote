import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './common-submodule/src/styles/global.scss'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
