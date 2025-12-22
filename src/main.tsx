import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/index.tsx';

const container = document.getElementById('root');

if (container){
  createRoot(container).render(
    <StrictMode>
      <AppRouter/>
    </StrictMode>
  )
}